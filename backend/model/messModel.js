const mongoose = require('mongoose');

exports.messSchema = new mongoose.Schema({
    JWT: String,
    current: {
        type: Array,
        default: [F,F,F]
    },
    currentDate: {
        type: Date,
        default: Date.now()
    },
    history: {
        type: Object
    }
});
