const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router
    .post('/student', loginController.loginStudent)
    // .post('/admin')


module.exports = router;