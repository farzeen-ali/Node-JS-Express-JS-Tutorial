const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Good Morning From Express JS')
})
app.get('/contact', (req, res) => {
    res.send('Contact us')
})

app.listen(1000);