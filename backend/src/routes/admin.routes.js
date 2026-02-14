/**
 * Admin Routes
 * Protected routes for admin operations
 */

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { restrictTo } = require('../middleware/auth.middleware');

// Apply admin-only restriction to all routes
router.use(restrictTo('ADMIN'));

// Dashboard
router.get('/dashboard', adminController.getDashboard);

// Orders
router.get('/orders', adminController.getOrders);
router.get('/orders/export', adminController.exportOrders);
router.put('/orders/:id/status', adminController.updateOrderStatus);

// Consolidated sourcing
router.get('/sourcing', adminController.getSourcingList);
router.get('/packing', adminController.getPackingList);

// Customers
router.get('/customers', adminController.getCustomers);
router.get('/customers/:id', adminController.getCustomerDetails);
router.post('/customers/:id/notes', adminController.addCustomerNote);

// Baskets
router.get('/baskets', adminController.getBaskets);
router.put('/baskets/:id', adminController.updateBasket);
router.put('/baskets/:id/toggle', adminController.toggleBasketStatus);

// Societies
router.get('/societies', adminController.getSocieties);
router.post('/societies', adminController.createSociety);
router.put('/societies/:id', adminController.updateSociety);

// System controls
router.get('/holidays', adminController.getHolidays);
router.post('/holidays', adminController.createHoliday);
router.delete('/holidays/:id', adminController.deleteHoliday);
router.post('/pause-global', adminController.pauseGlobalDelivery);
router.post('/resume-global', adminController.resumeGlobalDelivery);

// Settings
router.get('/settings', adminController.getSettings);
router.put('/settings', adminController.updateSettings);

module.exports = router;
