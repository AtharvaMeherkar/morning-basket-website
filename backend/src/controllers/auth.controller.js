/**
 * Authentication Controller
 * Handles OTP-based phone authentication
 */

const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma');
const { AppError } = require('../middleware/error.middleware');

/**
 * Generate a 6-digit OTP
 */
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/**
 * Generate JWT token
 */
const signToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

/**
 * Send OTP to phone number
 * POST /api/auth/send-otp
 */
exports.sendOTP = async (req, res, next) => {
  try {
    const { phone } = req.body;

    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      return next(new AppError('Please provide a valid 10-digit Indian phone number', 400));
    }

    // Generate OTP
    const code = generateOTP();
    const expiresAt = new Date(Date.now() + (process.env.OTP_EXPIRY_MINUTES || 5) * 60 * 1000);

    // Invalidate previous OTPs for this phone
    await prisma.oTP.updateMany({
      where: { phone, isUsed: false },
      data: { isUsed: true }
    });

    // Create new OTP
    await prisma.oTP.create({
      data: { phone, code, expiresAt }
    });

    // In production, send SMS here using Twilio/MSG91
    // For development, we'll log it
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] OTP for ${phone}: ${code}`);
    }

    // TODO: Integrate SMS provider (Twilio/MSG91)
    // await sendSMS(phone, `Your MorningBasket verification code is: ${code}`);

    res.status(200).json({
      status: 'success',
      message: 'OTP sent successfully',
      // Only include OTP in development for testing
      ...(process.env.NODE_ENV === 'development' && { devOTP: code })
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Verify OTP and login/register user
 * POST /api/auth/verify-otp
 */
exports.verifyOTP = async (req, res, next) => {
  try {
    const { phone, code } = req.body;

    if (!phone || !code) {
      return next(new AppError('Phone number and OTP are required', 400));
    }

    // Find valid OTP
    const otp = await prisma.oTP.findFirst({
      where: {
        phone,
        code,
        isUsed: false,
        expiresAt: { gt: new Date() }
      }
    });

    if (!otp) {
      return next(new AppError('Invalid or expired OTP', 400));
    }

    // Mark OTP as used
    await prisma.oTP.update({
      where: { id: otp.id },
      data: { isUsed: true }
    });

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { phone }
    });

    let isNewUser = false;
    if (!user) {
      user = await prisma.user.create({
        data: {
          phone,
          isVerified: true
        }
      });
      isNewUser = true;
    } else {
      // Update verification status
      user = await prisma.user.update({
        where: { id: user.id },
        data: { isVerified: true }
      });
    }

    // Generate token
    const token = signToken(user.id);

    res.status(200).json({
      status: 'success',
      message: isNewUser ? 'Registration successful' : 'Login successful',
      data: {
        token,
        user: {
          id: user.id,
          phone: user.phone,
          name: user.name,
          role: user.role,
          isNewUser,
          needsProfile: !user.name
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Complete user registration with profile details
 * POST /api/auth/complete-registration
 */
exports.completeRegistration = async (req, res, next) => {
  try {
    const { token, name, societyId, flatNumber, tower, preferredWindow } = req.body;

    if (!token || !name || !societyId || !flatNumber) {
      return next(new AppError('Name, society, and flat number are required', 400));
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return next(new AppError('Invalid or expired token', 401));
    }

    // Check if society exists and is active
    const society = await prisma.society.findFirst({
      where: { id: societyId, isActive: true }
    });

    if (!society) {
      return next(new AppError('Selected society is not available for delivery', 400));
    }

    // Update user profile
    const user = await prisma.user.update({
      where: { id: decoded.userId },
      data: { name }
    });

    // Create address
    await prisma.address.create({
      data: {
        userId: user.id,
        societyId,
        flatNumber,
        tower: tower || null,
        isDefault: true
      }
    });

    res.status(200).json({
      status: 'success',
      message: 'Profile completed successfully',
      data: {
        user: {
          id: user.id,
          phone: user.phone,
          name: user.name,
          role: user.role
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Logout user
 * POST /api/auth/logout
 */
exports.logout = async (req, res, next) => {
  try {
    // For stateless JWT, we just send success
    // In production, you might want to blacklist the token
    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully'
    });
  } catch (error) {
    next(error);
  }
};
