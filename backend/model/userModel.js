const mongoose = require('mongoose');
const { messSchema } = require('./messModel');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter your email!']
  },
  enroll: {
        type: Number,
        unique: true,
        required: [true, 'Please enter your enroll!']
  },
  password: {
      type: String
    },
  tuitionFee: Boolean,
    //mess:
    //entry:
    //parking:
});

module.exports = mongoose.model('user', userSchema);