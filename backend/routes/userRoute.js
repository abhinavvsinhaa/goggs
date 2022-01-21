const express = require('express');
const authController = require('../controllers/authController.js');
const userController = require('../controllers/userController.js');

const router = express.Router();

//User Router
router.post('/login', authController.login);
router.get('/', userController.getUser);

module.exports = router;
