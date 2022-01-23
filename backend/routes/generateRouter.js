const express = require('express');
const generateController = require('../controllers/generateController');

const router = express.Router();

router
    .post('/general', generateController.generalJWT)
    .post('/hostel', generateController.hostelJWT)
    .post('/mess', generateController.messJWT)

module.exports = router;