const express = require("express");
const router = express.Router();

const transactions = require('./../controllers/transactions');

router.route('/').post(transactions.createTransaction);
router.route('/:id').get(transactions.getTransactionById);

module.exports = router;