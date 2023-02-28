const express = require('express');

// create router
const router = express.Router();

// auth
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');
router.get('/auth/login', authMiddleware.verifyToken, authController.login);


// exports
module.exports = router;