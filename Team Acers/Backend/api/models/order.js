const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    _id: mongoose.Schema.Types.ObjectId,
   
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);