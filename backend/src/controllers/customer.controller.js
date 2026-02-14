/**
 * Customer Controller
 * Handles customer profile, subscriptions, and orders
 */

const prisma = require('../utils/prisma');
const { AppError } = require('../middleware/error.middleware');

/**
 * Get customer profile
 * GET /api/customer/profile
 */
exports.getProfile = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        addresses: {
          include: { society: true }
        }
      }
    });

    res.status(200).json({
      status: 'success',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update customer profile
 * PUT /api/customer/profile
 */
exports.updateProfile = async (req, res, next) => {
  try {
    const { name } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { name }
    });

    res.status(200).json({
      status: 'success',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get customer addresses
 * GET /api/customer/addresses
 */
exports.getAddresses = async (req, res, next) => {
  try {
    const addresses = await prisma.address.findMany({
      where: { userId: req.user.id },
      include: { society: true }
    });

    res.status(200).json({
      status: 'success',
      data: { addresses }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add new address
 * POST /api/customer/addresses
 */
exports.addAddress = async (req, res, next) => {
  try {
    const { societyId, flatNumber, tower, landmark, isDefault } = req.body;

    if (!societyId || !flatNumber) {
      return next(new AppError('Society and flat number are required', 400));
    }

    // If setting as default, unset other defaults
    if (isDefault) {
      await prisma.address.updateMany({
        where: { userId: req.user.id },
        data: { isDefault: false }
      });
    }

    const address = await prisma.address.create({
      data: {
        userId: req.user.id,
        societyId,
        flatNumber,
        tower,
        landmark,
        isDefault: isDefault || false
      },
      include: { society: true }
    });

    res.status(201).json({
      status: 'success',
      data: { address }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update address
 * PUT /api/customer/addresses/:id
 */
exports.updateAddress = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { flatNumber, tower, landmark, isDefault } = req.body;

    // Verify ownership
    const existing = await prisma.address.findFirst({
      where: { id, userId: req.user.id }
    });

    if (!existing) {
      return next(new AppError('Address not found', 404));
    }

    if (isDefault) {
      await prisma.address.updateMany({
        where: { userId: req.user.id },
        data: { isDefault: false }
      });
    }

    const address = await prisma.address.update({
      where: { id },
      data: { flatNumber, tower, landmark, isDefault },
      include: { society: true }
    });

    res.status(200).json({
      status: 'success',
      data: { address }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete address
 * DELETE /api/customer/addresses/:id
 */
exports.deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await prisma.address.findFirst({
      where: { id, userId: req.user.id }
    });

    if (!existing) {
      return next(new AppError('Address not found', 404));
    }

    await prisma.address.delete({ where: { id } });

    res.status(200).json({
      status: 'success',
      message: 'Address deleted'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get active subscription
 * GET /api/customer/subscription
 */
exports.getSubscription = async (req, res, next) => {
  try {
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: { in: ['ACTIVE', 'PAUSED'] }
      },
      include: {
        basket: true,
        skippedDates: {
          where: { date: { gte: new Date() } }
        }
      }
    });

    res.status(200).json({
      status: 'success',
      data: { subscription }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create subscription
 * POST /api/customer/subscription
 */
exports.createSubscription = async (req, res, next) => {
  try {
    const { basketId, frequency, preferredWindow } = req.body;

    if (!basketId || !frequency) {
      return next(new AppError('Basket and frequency are required', 400));
    }

    // Check for existing active subscription
    const existing = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: { in: ['ACTIVE', 'PAUSED'] }
      }
    });

    if (existing) {
      return next(new AppError('You already have an active subscription. Please update or cancel it first.', 400));
    }

    // Verify basket exists and is active
    const basket = await prisma.basket.findFirst({
      where: { id: basketId, isActive: true }
    });

    if (!basket) {
      return next(new AppError('Selected basket is not available', 400));
    }

    // Get default address for order creation
    const address = await prisma.address.findFirst({
      where: { userId: req.user.id, isDefault: true }
    });

    if (!address) {
      return next(new AppError('Please add an address before subscribing', 400));
    }

    const subscription = await prisma.subscription.create({
      data: {
        userId: req.user.id,
        basketId,
        frequency,
        preferredWindow: preferredWindow || '06:00-08:00',
        startDate: new Date(),
        status: 'ACTIVE'
      },
      include: { basket: true }
    });

    res.status(201).json({
      status: 'success',
      message: 'Subscription created successfully',
      data: { subscription }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update subscription
 * PUT /api/customer/subscription
 */
exports.updateSubscription = async (req, res, next) => {
  try {
    const { basketId, frequency, preferredWindow } = req.body;

    const existing = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: { in: ['ACTIVE', 'PAUSED'] }
      }
    });

    if (!existing) {
      return next(new AppError('No active subscription found', 404));
    }

    const updateData = {};
    if (basketId) updateData.basketId = basketId;
    if (frequency) updateData.frequency = frequency;
    if (preferredWindow) updateData.preferredWindow = preferredWindow;

    const subscription = await prisma.subscription.update({
      where: { id: existing.id },
      data: updateData,
      include: { basket: true }
    });

    res.status(200).json({
      status: 'success',
      data: { subscription }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Pause subscription
 * POST /api/customer/subscription/pause
 */
exports.pauseSubscription = async (req, res, next) => {
  try {
    const { pauseUntil } = req.body;

    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: 'ACTIVE'
      }
    });

    if (!subscription) {
      return next(new AppError('No active subscription to pause', 404));
    }

    const updated = await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        status: 'PAUSED',
        pausedUntil: pauseUntil ? new Date(pauseUntil) : null
      }
    });

    res.status(200).json({
      status: 'success',
      message: 'Subscription paused',
      data: { subscription: updated }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Resume subscription
 * POST /api/customer/subscription/resume
 */
exports.resumeSubscription = async (req, res, next) => {
  try {
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: 'PAUSED'
      }
    });

    if (!subscription) {
      return next(new AppError('No paused subscription to resume', 404));
    }

    const updated = await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        status: 'ACTIVE',
        pausedUntil: null
      }
    });

    res.status(200).json({
      status: 'success',
      message: 'Subscription resumed',
      data: { subscription: updated }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get order history
 * GET /api/customer/orders
 */
exports.getOrders = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where: { userId: req.user.id },
        include: {
          basket: true,
          address: { include: { society: true } }
        },
        orderBy: { orderDate: 'desc' },
        skip,
        take: parseInt(limit)
      }),
      prisma.order.count({ where: { userId: req.user.id } })
    ]);

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
 * Get tomorrow's order
 * GET /api/customer/orders/tomorrow
 */
exports.getTomorrowOrder = async (req, res, next) => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const tomorrowEnd = new Date(tomorrow);
    tomorrowEnd.setHours(23, 59, 59, 999);

    const order = await prisma.order.findFirst({
      where: {
        userId: req.user.id,
        orderDate: { gte: tomorrow, lte: tomorrowEnd }
      },
      include: {
        basket: true,
        address: { include: { society: true } }
      }
    });

    // Get cutoff time (default 9 PM)
    const cutoffSetting = await prisma.systemSetting.findFirst({
      where: { key: 'ORDER_CUTOFF_TIME' }
    });
    const cutoffTime = cutoffSetting?.value || '21:00';

    res.status(200).json({
      status: 'success',
      data: {
        order,
        cutoffTime,
        isLocked: order?.isLocked || false
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Skip a specific day
 * POST /api/customer/orders/skip
 */
exports.skipOrder = async (req, res, next) => {
  try {
    const { date } = req.body;

    if (!date) {
      return next(new AppError('Date is required', 400));
    }

    const skipDate = new Date(date);
    skipDate.setHours(0, 0, 0, 0);

    // Cannot skip past dates or today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (skipDate <= today) {
      return next(new AppError('Cannot skip past dates or today', 400));
    }

    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: 'ACTIVE'
      }
    });

    if (!subscription) {
      return next(new AppError('No active subscription', 404));
    }

    // Check if order is already locked
    const existingOrder = await prisma.order.findFirst({
      where: {
        userId: req.user.id,
        orderDate: { gte: skipDate, lt: new Date(skipDate.getTime() + 86400000) }
      }
    });

    if (existingOrder?.isLocked) {
      return next(new AppError('This order is locked and cannot be skipped', 400));
    }

    // Add to skipped dates
    await prisma.skippedDate.upsert({
      where: {
        subscriptionId_date: {
          subscriptionId: subscription.id,
          date: skipDate
        }
      },
      update: {},
      create: {
        subscriptionId: subscription.id,
        date: skipDate
      }
    });

    // Update order status if exists
    if (existingOrder) {
      await prisma.order.update({
        where: { id: existingOrder.id },
        data: { status: 'SKIPPED' }
      });
    }

    res.status(200).json({
      status: 'success',
      message: `Order for ${skipDate.toDateString()} has been skipped`
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get payment status
 * GET /api/customer/payments
 */
exports.getPaymentStatus = async (req, res, next) => {
  try {
    // For Phase 1, this is a simple read-only view
    // Payment tracking will be enhanced later
    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: req.user.id,
        status: { in: ['ACTIVE', 'PAUSED'] }
      },
      include: { basket: true }
    });

    // Calculate current billing period
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const ordersThisMonth = await prisma.order.count({
      where: {
        userId: req.user.id,
        orderDate: { gte: startOfMonth, lte: endOfMonth },
        status: { in: ['DELIVERED', 'OUT_FOR_DELIVERY'] }
      }
    });

    res.status(200).json({
      status: 'success',
      data: {
        subscription: subscription ? {
          basket: subscription.basket.name,
          pricePerDay: subscription.basket.priceDaily,
          frequency: subscription.frequency
        } : null,
        currentPeriod: {
          start: startOfMonth,
          end: endOfMonth,
          deliveriesCompleted: ordersThisMonth,
          estimatedAmount: ordersThisMonth * (subscription?.basket.priceDaily || 0)
        },
        paymentMethod: 'UPI (Manual)',
        note: 'Payment details will be shared at the end of billing period'
      }
    });
  } catch (error) {
    next(error);
  }
};
