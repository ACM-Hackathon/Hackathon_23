const express = require("express");
const router = express.Router();

const admintransactions = require('./../controllers/admintransactions');
const auth = require('./../middlewares/auth');

router.route('/login').post(admintransactions.login);
router.route('/').get(auth.adminAuth, admintransactions.getTransactions);

module.exports = router;