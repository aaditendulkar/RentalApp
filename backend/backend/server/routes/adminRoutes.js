const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Analytics Overview
router.get('/stats', adminController.getStats);

// Admin: All Users
router.get('/users', adminController.getAllUsers);

module.exports = router;
