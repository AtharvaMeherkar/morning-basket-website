/**
 * Customer Routes
 * Protected routes for authenticated customers
 */

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

// Profile
router.get('/profile', customerController.getProfile);
router.put('/profile', customerController.updateProfile);

// Addresses
router.get('/addresses', customerController.getAddresses);
router.post('/addresses', customerController.addAddress);
router.put('/addresses/:id', customerController.updateAddress);
router.delete('/addresses/:id', customerController.deleteAddress);

// Subscription
router.get('/subscription', customerController.getSubscription);
router.post('/subscription', customerController.createSubscription);
router.put('/subscription', customerController.updateSubscription);
router.post('/subscription/pause', customerController.pauseSubscription);
router.post('/subscription/resume', customerController.resumeSubscription);

// Orders
router.get('/orders', customerController.getOrders);
router.get('/orders/tomorrow', customerController.getTomorrowOrder);
router.post('/orders/skip', customerController.skipOrder);

// Payment status (read-only for now)
router.get('/payments', customerController.getPaymentStatus);

module.exports = router;
