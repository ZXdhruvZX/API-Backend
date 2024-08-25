const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    let numbers = [];
    let alphabets = [];
    let highestLowerCase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowerCase) {
                highestLowerCase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "dhruv.sharma2021b@vitstudent.ac.in",
        roll_number: "21BDS0223",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowerCase ? [highestLowerCase] : []
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
