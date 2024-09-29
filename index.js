const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body for POST requests
app.use(express.json());

// GET /hello endpoint
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user endpoint with query parameters
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// POST /user endpoint with path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

