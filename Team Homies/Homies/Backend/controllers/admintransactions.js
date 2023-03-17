const AdminTransaction = require('../models/admintransaction');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const secret = process.env.JWT_SECRET;

module.exports.getTransactions = async (req, res) => {

    try {
        
        const transactions = await AdminTransaction.find({});

        res.status(200).json({
            transactions: transactions,
            message: "Transactions Fetched Successfully !!!"
        });

    } catch (error) {
        res.status(400).json({
            message: error
        });
    }

}

module.exports.login = async (req, res) => {

    try {

        const { username, password } = req.body;

        if(username !== "Homies" || password !== "Homies") {
            return res.status(404).json({
                description: 'Login failed due to Invalid Credentials',
                content: {
                    type: 'Client Error',
                    code: '404',
                    path: '/admin/login',
                    message: 'Invalid credentials'
                }
            })
        }

        const token = jwt.sign({ username }, secret, { expiresIn: "1d" });

        res.status(200).json({ token, description: 'Logged in Successfully'});


    } catch (error) {
        res.status(500).json({
            description: "Login Failed due to some unexpected error",
            content: {
                type: 'System Error',
                code: '500',
                path: '/admin/login',
                message: `Error processing request ${error.message}`
            }
        })
    }

}