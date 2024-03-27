
const express = require('express');
const app = express();
const port = 3003;

const orders = [
    { id: 1, userId: 1, productId: 1, quantity: 2 },
    { id: 2, userId: 2, productId: 2, quantity: 1 },
    { id: 3, userId: 3, productId: 3, quantity: 3 },
];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(port, () => {
    console.log(`Order Service listening at http://localhost:${port}`);
});
