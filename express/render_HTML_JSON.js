const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send(`
        <input type='text' placeholder="Your Name" />
        <a href='/contact'>Got to Contact us Page</a>
        `)
})

app.get('/contact', (req, res) => {
    res.send(`
        <h2>Hello Express JS</h2>
        <a href='/about'>Got to About Page</a>
        `)
})

app.get('/about', (req, res) => {
    res.send([
        { name: "farzeen", address: 'ABC' },
        { name: "huzaifa", address: 'DEF' },
        { name: "bilal", address: 'GHI' },
    ])
})

app.listen(2000);