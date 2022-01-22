const express = require('express');
const authController = require('../controllers/authController.js');
const userController = require('../controllers/userController.js');

const router = express.Router();

//User Router
router.get('/verifyGeneralAndHostel', userController.verifyGeneralAndHostel)
router.get('/verifyMess', userController.verifyMess)

module.exports = router;
