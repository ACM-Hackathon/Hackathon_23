const Mongoose = require('mongoose');

const BlockTransactionSchema = new Mongoose.Schema({

    transaction_id: {
        type: String,
        required: true,
        unique: true
    },
    sender_id: {
        type: String,
        required: true
    },
    receiver_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }

})

module.exports = Mongoose.model('BlockTransaction', BlockTransactionSchema);