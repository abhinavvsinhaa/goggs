const mongoose = require('mongoose');

exports.userSchema = new mongoose.Schema({
    current: {
        type: Array,
        default: [F,F,F]
    },
    history: {
        type: Object
    }
});

