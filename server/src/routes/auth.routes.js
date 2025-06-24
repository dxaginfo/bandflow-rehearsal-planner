const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Register a new user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

// Refresh token
router.post('/refresh-token', authController.refreshToken);

// Logout user
router.post('/logout', authController.logout);

module.exports = router;