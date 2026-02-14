/**
 * Admin Controller
 * Handles admin dashboard, order management, and system controls
 */

const prisma = require('../utils/prisma');
const { AppError } = require('../middleware/error.middleware');

/**
 * Get dashboard overview
 * GET /api/admin/dashboard
 */
exports.getDashboard = async (req, res, next) => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const tomorrowEnd = new Date(tomorrow);
    tomorrowEnd.setHours(23, 59, 59, 999);

    // Get tomorrow's orders count
    const tomorrowOrders = await prisma.order.count({
      where: {
        orderDate: { gte: tomorrow, lte: tomorrowEnd },
        status: { not: 'CANCELLED' }
      }
    });

    // Society-wise breakdown
    const societyWise = await prisma.order.groupBy({
      by: ['addressId'],
      where: {
        orderDate: { gte: tomorrow, lte: tomorrowEnd },
        status: { not: 'CANCELLED' }
      },
      _count: true
    });

    // Get society names for the breakdown
    const addressIds = societyWise.map(s => s.addressId);
    const addresses = await prisma.address.findMany({
      where: { id: { in: addressIds } },
      include: { society: true }
    });

    const societyMap = {};
    addresses.forEach(addr => {
      const societyName = addr.society.name;
      societyMap[societyName] = (societyMap[societyName] || 0) + 
        (societyWise.find(s => s.addressId === addr.id)?._count || 0);
    });

    // Basket-wise breakdown
    const basketWise = await prisma.order.groupBy({
      by: ['basketId'],
      where: {
        orderDate: { gte: tomorrow, lte: tomorrowEnd },
        status: { not: 'CANCELLED' }
      },
      _count: true
    });

    const basketIds = basketWise.map(b => b.basketId);
    const baskets = await prisma.basket.findMany({
      where: { id: { in: basketIds } }
    });

    const basketMap = {};
    baskets.forEach(basket => {
      basketMap[basket.name] = basketWise.find(b => b.basketId === basket.id)?._count || 0;
    });

    // Active subscriptions
    const activeSubscriptions = await prisma.subscription.count({
      where: { status: 'ACTIVE' }
    });

    // Paused subscriptions
    const pausedSubscriptions = await prisma.subscription.count({
      where: { status: 'PAUSED' }
    });

    // Total customers
    const totalCustomers = await prisma.user.count({
      where: { role: 'CUSTOMER' }
    });

    res.status(200).json({
      status: 'success',
      data: {
        tomorrow: {
          date: tomorrow.toISOString().split('T')[0],
          totalOrders: tomorrowOrders,
          bySociety: societyMap,
          byBasket: basketMap
        },
        subscriptions: {
          active: activeSubscriptions,
          paused: pausedSubscriptions
        },
        totalCustomers
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all orders with filters
 * GET /api/admin/orders
 */
exports.getOrders = async (req, res, next) => {
  try {
    const { date, society, status, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {};

    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      where.orderDate = { gte: startDate, lte: endDate };
    }

    if (status) {
      where.status = status;
    }

    // Society filter requires a join
    let orders = await prisma.order.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, phone: true } },
        basket: true,
        address: { include: { society: true } }
      },
      orderBy: { orderDate: 'desc' },
      skip,
      take: parseInt(limit)
    });

    // Filter by society if specified
    if (society) {
      orders = orders.filter(o => o.address.society.id === society);
    }

    const total = await prisma.order.count({ where });

    res.status(200).json({
      status: 'success',
      data: {
        orders,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Export orders to CSV
 * GET /api/admin/orders/export
 */
exports.exportOrders = async (req, res, next) => {
  try {
    const { date } = req.query;

    if (!date) {
      return next(new AppError('Date is required for export', 400));
    }

    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const orders = await prisma.order.findMany({
      where: {
        orderDate: { gte: startDate, lte: endDate },
        status: { not: 'CANCELLED' }
      },
      include: {
        user: { select: { name: true, phone: true } },
        basket: true,
        address: { include: { society: true } }
      },
      orderBy: [
        { address: { society: { name: 'asc' } } },
        { address: { tower: 'asc' } },
        { address: { flatNumber: 'asc' } }
      ]
    });

    // Generate CSV
    const headers = ['Order ID', 'Customer', 'Phone', 'Society', 'Tower', 'Flat', 'Basket', 'Status'];
    const rows = orders.map(o => [
      o.id.slice(0, 8),
      o.user.name || 'N/A',
      o.user.phone,
      o.address.society.name,
      o.address.tower || '-',
      o.address.flatNumber,
      o.basket.name,
      o.status
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=orders-${date}.csv`);
    res.send(csv);
  } catch (error) {
    next(error);
  }
};

/**
 * Update order status
 * PUT /api/admin/orders/:id/status
 */
exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['PENDING', 'CONFIRMED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'];
    if (!validStatuses.includes(status)) {
      return next(new AppError('Invalid status', 400));
    }

    const order = await prisma.order.update({
      where: { id },
      data: {
        status,
        ...(status === 'DELIVERED' && { deliveredAt: new Date() })
      }
    });

    res.status(200).json({
      status: 'success',
      data: { order }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get sourcing list (consolidated fruit requirements)
 * GET /api/admin/sourcing
 */
exports.getSourcingList = async (req, res, next) => {
  try {
    const { date } = req.query;

    const targetDate = date ? new Date(date) : new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    const endDate = new Date(targetDate);
    endDate.setHours(23, 59, 59, 999);

    // Get orders grouped by basket
    const basketOrders = await prisma.order.groupBy({
      by: ['basketId'],
      where: {
        orderDate: { gte: targetDate, lte: endDate },
        status: { not: 'CANCELLED' }
      },
      _count: true
    });

    // Get basket details with quantities
    const baskets = await prisma.basket.findMany({
      where: { id: { in: basketOrders.map(b => b.basketId) } }
    });

    const sourcingList = baskets.map(basket => {
      const orderCount = basketOrders.find(b => b.basketId === basket.id)?._count || 0;
      return {
        basketName: basket.name,
        quantity: orderCount,
        contents: JSON.parse(basket.contents || '[]')
      };
    });

    res.status(200).json({
      status: 'success',
      data: {
        date: targetDate.toISOString().split('T')[0],
        sourcingList,
        totalBaskets: basketOrders.reduce((sum, b) => sum + b._count, 0)
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get packing list (society-wise orders)
 * GET /api/admin/packing
 */
exports.getPackingList = async (req, res, next) => {
  try {
    const { date } = req.query;

    const targetDate = date ? new Date(date) : new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 0, 0);
    const endDate = new Date(targetDate);
    endDate.setHours(23, 59, 59, 999);

    const orders = await prisma.order.findMany({
      where: {
        orderDate: { gte: targetDate, lte: endDate },
        status: { not: 'CANCELLED' }
      },
      include: {
        user: { select: { name: true, phone: true } },
        basket: true,
        address: { include: { society: true } }
      },
      orderBy: [
        { address: { society: { name: 'asc' } } },
        { address: { tower: 'asc' } }
      ]
    });

    // Group by society
    const bySociety = {};
    orders.forEach(order => {
      const societyName = order.address.society.name;
      if (!bySociety[societyName]) {
        bySociety[societyName] = [];
      }
      bySociety[societyName].push({
        orderId: order.id.slice(0, 8),
        customer: order.user.name || 'N/A',
        phone: order.user.phone,
        tower: order.address.tower || '-',
        flat: order.address.flatNumber,
        basket: order.basket.name,
        status: order.status
      });
    });

    res.status(200).json({
      status: 'success',
      data: {
        date: targetDate.toISOString().split('T')[0],
        packingList: bySociety,
        totalOrders: orders.length
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all customers
 * GET /api/admin/customers
 */
exports.getCustomers = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const customers = await prisma.user.findMany({
      where: { role: 'CUSTOMER' },
      include: {
        subscriptions: {
          where: status ? { status } : {},
          include: { basket: true }
        },
        addresses: {
          where: { isDefault: true },
          include: { society: true }
        }
      },
      skip,
      take: parseInt(limit),
      orderBy: { createdAt: 'desc' }
    });

    const total = await prisma.user.count({ where: { role: 'CUSTOMER' } });

    res.status(200).json({
      status: 'success',
      data: {
        customers,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total,
          pages: Math.ceil(total / parseInt(limit))
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get customer details
 * GET /api/admin/customers/:id
 */
exports.getCustomerDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await prisma.user.findUnique({
      where: { id },
      include: {
        subscriptions: {
          include: { basket: true, skippedDates: true }
        },
        addresses: { include: { society: true } },
        orders: {
          take: 20,
          orderBy: { orderDate: 'desc' },
          include: { basket: true }
        }
      }
    });

    if (!customer) {
      return next(new AppError('Customer not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: { customer }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add admin note to customer
 * POST /api/admin/customers/:id/notes
 */
exports.addCustomerNote = async (req, res, next) => {
  try {
    // For Phase 1, we'll store notes in a simple way
    // This could be enhanced with a separate Notes model later
    res.status(200).json({
      status: 'success',
      message: 'Note added (feature coming in next phase)'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all baskets
 * GET /api/admin/baskets
 */
exports.getBaskets = async (req, res, next) => {
  try {
    const baskets = await prisma.basket.findMany({
      orderBy: { sortOrder: 'asc' }
    });

    res.status(200).json({
      status: 'success',
      data: { baskets }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update basket
 * PUT /api/admin/baskets/:id
 */
exports.updateBasket = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, contents, idealFamilySize, priceDaily, priceWeekly, priceMonthly } = req.body;

    const basket = await prisma.basket.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(contents && { contents: JSON.stringify(contents) }),
        ...(idealFamilySize && { idealFamilySize }),
        ...(priceDaily && { priceDaily }),
        ...(priceWeekly && { priceWeekly }),
        ...(priceMonthly && { priceMonthly })
      }
    });

    res.status(200).json({
      status: 'success',
      data: { basket }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Toggle basket availability
 * PUT /api/admin/baskets/:id/toggle
 */
exports.toggleBasketStatus = async (req, res, next) => {
  try {
    const { id } = req.params;

    const basket = await prisma.basket.findUnique({ where: { id } });
    if (!basket) {
      return next(new AppError('Basket not found', 404));
    }

    const updated = await prisma.basket.update({
      where: { id },
      data: { isActive: !basket.isActive }
    });

    res.status(200).json({
      status: 'success',
      data: { basket: updated }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get societies
 * GET /api/admin/societies
 */
exports.getSocieties = async (req, res, next) => {
  try {
    const societies = await prisma.society.findMany({
      orderBy: { name: 'asc' }
    });

    res.status(200).json({
      status: 'success',
      data: { societies }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create society
 * POST /api/admin/societies
 */
exports.createSociety = async (req, res, next) => {
  try {
    const { name, area, city, deliveryStartTime, deliveryEndTime } = req.body;

    if (!name || !area) {
      return next(new AppError('Name and area are required', 400));
    }

    const society = await prisma.society.create({
      data: {
        name,
        area,
        city: city || 'Hyderabad',
        deliveryStartTime: deliveryStartTime || '06:00',
        deliveryEndTime: deliveryEndTime || '09:00'
      }
    });

    res.status(201).json({
      status: 'success',
      data: { society }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update society
 * PUT /api/admin/societies/:id
 */
exports.updateSociety = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, area, isActive, deliveryStartTime, deliveryEndTime } = req.body;

    const society = await prisma.society.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(area && { area }),
        ...(isActive !== undefined && { isActive }),
        ...(deliveryStartTime && { deliveryStartTime }),
        ...(deliveryEndTime && { deliveryEndTime })
      }
    });

    res.status(200).json({
      status: 'success',
      data: { society }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get holidays
 * GET /api/admin/holidays
 */
exports.getHolidays = async (req, res, next) => {
  try {
    const holidays = await prisma.holiday.findMany({
      where: { date: { gte: new Date() } },
      orderBy: { date: 'asc' }
    });

    res.status(200).json({
      status: 'success',
      data: { holidays }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create holiday
 * POST /api/admin/holidays
 */
exports.createHoliday = async (req, res, next) => {
  try {
    const { date, reason } = req.body;

    if (!date) {
      return next(new AppError('Date is required', 400));
    }

    const holiday = await prisma.holiday.create({
      data: {
        date: new Date(date),
        reason
      }
    });

    res.status(201).json({
      status: 'success',
      data: { holiday }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete holiday
 * DELETE /api/admin/holidays/:id
 */
exports.deleteHoliday = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.holiday.delete({ where: { id } });

    res.status(200).json({
      status: 'success',
      message: 'Holiday deleted'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Pause global delivery
 * POST /api/admin/pause-global
 */
exports.pauseGlobalDelivery = async (req, res, next) => {
  try {
    await prisma.systemSetting.upsert({
      where: { key: 'GLOBAL_PAUSE' },
      update: { value: 'true' },
      create: { key: 'GLOBAL_PAUSE', value: 'true' }
    });

    res.status(200).json({
      status: 'success',
      message: 'Global delivery paused'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Resume global delivery
 * POST /api/admin/resume-global
 */
exports.resumeGlobalDelivery = async (req, res, next) => {
  try {
    await prisma.systemSetting.upsert({
      where: { key: 'GLOBAL_PAUSE' },
      update: { value: 'false' },
      create: { key: 'GLOBAL_PAUSE', value: 'false' }
    });

    res.status(200).json({
      status: 'success',
      message: 'Global delivery resumed'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get settings
 * GET /api/admin/settings
 */
exports.getSettings = async (req, res, next) => {
  try {
    const settings = await prisma.systemSetting.findMany();

    const settingsMap = {};
    settings.forEach(s => { settingsMap[s.key] = s.value; });

    res.status(200).json({
      status: 'success',
      data: { settings: settingsMap }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update settings
 * PUT /api/admin/settings
 */
exports.updateSettings = async (req, res, next) => {
  try {
    const updates = req.body;

    for (const [key, value] of Object.entries(updates)) {
      await prisma.systemSetting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) }
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Settings updated'
    });
  } catch (error) {
    next(error);
  }
};
