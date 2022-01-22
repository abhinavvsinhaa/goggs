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

// JWT Format
JWT: {
  enroll: 
  type: hostel
}

// For generator api routes
/hostel/JWT 
/academic/JWT
/mess/JWT

//For scanner
// Hostel scan - Only check if the user has a Hostel JWT (verified)
// Mess scan - 
//    1. Check if the user has false slots in array or not, 
//    2. Change false to true, and mark the user as verified
// Academic scan - Only check the user has a Academic JWT (verified)