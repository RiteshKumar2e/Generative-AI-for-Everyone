const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/demo-login', authController.demoLogin); // Demo login without database
router.get('/me', authController.getMe); // Protected route logic will be added via middleware

module.exports = router;
