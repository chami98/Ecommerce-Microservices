
const express = require('express');
const app = express();
const port = 3002;

const users = [
    { id: 1, name: 'Vinodi Nikeshani', email: 'vinodi@gmail.com' },
    { id: 2, name: 'Navodi Ambagahaduwa', email: 'navodi@gmail.com' },
    { id: 3, name: 'Vishmi Raveena', email: 'vishmi@gmail.com' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`User Service listening at http://localhost:${port}`);
});
