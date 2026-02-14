/**
 * Public Routes
 * Unauthenticated endpoints for public information
 */

const express = require('express');
const router = express.Router();
const publicController = require('../controllers/public.controller');

// Baskets (public view)
router.get('/baskets', publicController.getBaskets);

// Societies (for availability check)
router.get('/societies', publicController.getSocieties);
router.post('/check-availability', publicController.checkAvailability);

// Health/info
router.get('/info', publicController.getServiceInfo);

module.exports = router;
