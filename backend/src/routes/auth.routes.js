/**
 * Authentication Routes
 * OTP-based phone authentication
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Send OTP to phone number
router.post('/send-otp', authController.sendOTP);

// Verify OTP and login/register
router.post('/verify-otp', authController.verifyOTP);

// Complete registration (add name, address after OTP verification)
router.post('/complete-registration', authController.completeRegistration);

// Logout
router.post('/logout', authController.logout);

module.exports = router;
