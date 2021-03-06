const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

//User Router
router.post('/verifyGeneralAndHostel', userController.verifyGeneralAndHostel)
router.post('/verifyMess', userController.verifyMess)

module.exports = router;
