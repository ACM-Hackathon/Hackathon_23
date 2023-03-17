const express = require('express');
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require('cors');
 
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');
const blocktransactionRoutes = require('./routes/blocktransactions');
const admintransactionRoutes = require('./routes/admintransactions');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use(cors());

app.use('/user', userRoutes);
app.use('/transaction', transactionRoutes);
app.use('/block', blocktransactionRoutes);
app.use('/admin', admintransactionRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Dhanrakshak - The Protector of Your Wallet !!!");
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})