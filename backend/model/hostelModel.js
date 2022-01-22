const mongoose = require('mongoose');
const { messSchema } = require('./messModel');

const hostelSchema = new mongoose.Schema({
    JWT: String,
    hostelFee: Boolean,
    mess: messSchema
})
