/**
 * Public Controller
 * Handles unauthenticated public endpoints
 */

const prisma = require('../utils/prisma');

/**
 * Get available baskets (public view)
 * GET /api/public/baskets
 */
exports.getBaskets = async (req, res, next) => {
  try {
    const baskets = await prisma.basket.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        description: true,
        contents: true,
        idealFamilySize: true,
        priceDaily: true,
        priceWeekly: true,
        priceMonthly: true,
        sortOrder: true
      },
      orderBy: { sortOrder: 'asc' }
    });

    // Parse contents JSON for frontend
    const formattedBaskets = baskets.map(b => ({
      ...b,
      contents: JSON.parse(b.contents || '[]')
    }));

    res.status(200).json({
      status: 'success',
      data: { baskets: formattedBaskets }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get serviceable societies
 * GET /api/public/societies
 */
exports.getSocieties = async (req, res, next) => {
  try {
    const { area, city } = req.query;

    const where = { isActive: true };
    if (area) where.area = { contains: area, mode: 'insensitive' };
    if (city) where.city = { contains: city, mode: 'insensitive' };

    const societies = await prisma.society.findMany({
      where,
      select: {
        id: true,
        name: true,
        area: true,
        city: true,
        deliveryStartTime: true,
        deliveryEndTime: true
      },
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
 * Check if a society is serviceable
 * POST /api/public/check-availability
 */
exports.checkAvailability = async (req, res, next) => {
  try {
    const { societyName, area, pincode } = req.body;

    if (!societyName && !area) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide society name or area'
      });
    }

    // Search for matching societies
    const societies = await prisma.society.findMany({
      where: {
        isActive: true,
        OR: [
          societyName ? { name: { contains: societyName, mode: 'insensitive' } } : {},
          area ? { area: { contains: area, mode: 'insensitive' } } : {}
        ].filter(o => Object.keys(o).length > 0)
      },
      select: {
        id: true,
        name: true,
        area: true,
        city: true,
        deliveryStartTime: true,
        deliveryEndTime: true
      }
    });

    if (societies.length > 0) {
      res.status(200).json({
        status: 'success',
        data: {
          available: true,
          message: 'Great news! We deliver to your area.',
          societies
        }
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: {
          available: false,
          message: 'We are not yet serving your area. Leave your details and we will notify you when we start.',
          societies: []
        }
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get service info
 * GET /api/public/info
 */
exports.getServiceInfo = async (req, res, next) => {
  try {
    // Check if global pause is active
    const globalPause = await prisma.systemSetting.findFirst({
      where: { key: 'GLOBAL_PAUSE' }
    });

    // Get upcoming holidays
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const upcomingHolidays = await prisma.holiday.findMany({
      where: {
        date: { gte: today, lte: nextWeek }
      },
      orderBy: { date: 'asc' }
    });

    // Get cutoff time
    const cutoffSetting = await prisma.systemSetting.findFirst({
      where: { key: 'ORDER_CUTOFF_TIME' }
    });

    res.status(200).json({
      status: 'success',
      data: {
        serviceName: 'MorningBasket',
        tagline: 'Fresh fruits, hygienically cleaned and delivered every morning',
        isOperational: globalPause?.value !== 'true',
        cutoffTime: cutoffSetting?.value || '21:00',
        deliveryWindow: '6:00 AM - 9:00 AM',
        upcomingHolidays: upcomingHolidays.map(h => ({
          date: h.date.toISOString().split('T')[0],
          reason: h.reason
        })),
        contact: {
          whatsapp: '+91-XXXXXXXXXX',
          email: 'hello@morningbasket.in'
        }
      }
    });
  } catch (error) {
    next(error);
  }
};
