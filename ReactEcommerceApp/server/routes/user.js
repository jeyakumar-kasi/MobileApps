const express = require('express');
const router = express.Router();

// user
const userController = require('../controllers/user');
const authMiddleware = require('../middlewares/auth');

router.post('/user/create', authMiddleware.verifyToken, userController.create);
router.get('/user/current', authMiddleware.verifyToken, userController.get);
router.get('/user/admin', authMiddleware.verifyToken, authMiddleware.adminCheck, userController.get);

// export
module.exports = router;
