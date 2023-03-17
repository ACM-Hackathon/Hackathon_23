const express = require("express");
const router = express.Router();

const blocktransactions = require('./../controllers/blocktransactions');

router.route('/').get(blocktransactions.getTransaction).post(blocktransactions.createTransaction);

module.exports = router;