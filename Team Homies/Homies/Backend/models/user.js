const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    joining_date: {
        type: Date,
        default: new Date()
    },
    wallet_balance: {
        type: Number,
        default: 0
    },
    bank_accounts: {
        type: [Object],
        default: []
    }
});

module.exports = Mongoose.model('User', UserSchema);