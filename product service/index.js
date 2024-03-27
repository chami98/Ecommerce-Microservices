// product/index.js
const express = require('express');
const app = express();
const port = 3001;

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 100 },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Product Service listening at http://localhost:${port}`);
});
