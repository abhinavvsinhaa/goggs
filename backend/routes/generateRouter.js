const express = require('express');
const generateController = require('../controllers/generateController');

const router = express.Router();

router
    .get('/general', generateController.generalJWT)
    .get('/hostel', generateController.hostelJWT)
    .get('/mess', generateController.messJWT)

module.exports = router;