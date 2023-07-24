const express = require('express');
const fetch =  require('node-fetch');

const flw = require('flutterwave-react-v3');
const verifyToken = require('../middleware/verifyToken');
const Transaction = require('../models/Transaction');

const router = express.Router();

// Function to generate a unique transaction reference
function generateTransactionReference() {
    const timestamp = Date.now().toString();
    const randomChars = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomChars}`;
}

// Buy airtime
router.post('/buyairtime', verifyToken, async (req, res) => {
    try {
        const { number, amount } = req.body;

        // Construct the details object for Flutterwave API
        const details = {
            country: 'NG',
            customer: number,
            amount,
            type: 'AIRTIME',
            reference: generateTransactionReference(),
        };

        // Make the request to Flutterwave API to buy airtime
        const response = await fetch(process.env.AIRTIME_ENDPOINT_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });

        // Convert the response to JSON
        const data = await response.json();

        // Store the transaction details in the database
        const transaction = new Transaction({
            username: req.user.username,
            status: data.status,
            amount: data.amount,
            network: data.network,
            reference: data.reference,
            date: new Date(),
        });
        await transaction.save();

        // Return the response from Flutterwave API
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
