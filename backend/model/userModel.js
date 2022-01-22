const mongoose = require('mongoose');
const { hostelSchema } = require('./hostelModel');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!']
  },

  enroll: {
    type: Number,
    unique: true,
    required: [true, 'Please enter your enroll!']
  },

  password: {
    type: String, 
    required: true
  },

  tuitionFee: Boolean,
  hostel: hostelSchema
});

module.exports = mongoose.model('user', userSchema);

