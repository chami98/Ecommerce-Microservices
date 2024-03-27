
const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Gateway Service');
});

// Route for product service
app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/products');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route for user service
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route for order service
app.get('/orders', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3003/orders');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Gateway Service listening at http://localhost:${port}`);
});
