const Transaction = require('./../models/transaction');
const BlockTransaction = require('./../models/blocktransaction');

module.exports.createTransaction = async (req, res) => {

    try {
        
        const { transaction_id, sender_id, receiver_id, amount, timestamp } = req.body;

        if(!transaction_id || !sender_id || !receiver_id || !amount || !timestamp) {
            return res.status(400).json({
                message: "Missing required field(s)"
            });
        } 

        const transaction = await Transaction.create({ transaction_id, sender_id, receiver_id, amount, timestamp });

        await BlockTransaction.create({ transaction_id, sender_id, receiver_id, amount, timestamp });

        res.status(200).json({
            transaction: transaction,
            message: "Transaction Added Successfully"
        });


    } catch (error) {
        res.status(400).json({
            message: error
        });
    }

}

module.exports.getTransactionById = async (req, res) => {

    try {
        
        const { id } = req.params;

        const transaction = await Transaction.findOne({ "transaction_id": id });

        if(!transaction) {
            return res.status(404).json({
                message: "Transaction not found !!!"
            });
        }

        res.status(200).json({
            transaction: transaction,
            message: "Transaction Fetched Successfully"
        });

    } catch (error) {
        
        res.status(400).json({
            message: error
        });

    }

}