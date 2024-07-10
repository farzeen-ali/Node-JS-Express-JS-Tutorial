const express = require('express');
const reqFilter = require('./middleware');

const app = express();

const route = express.Router();
route.use(reqFilter);

// app.get('/', reqFilter, (req, res) => {
//     res.send("This is our Home Page")
// })

app.get('/', (req, res) => {
    res.send("This is our Home Page")
})

route.get('/about', (req, res) => {
    res.send("This is our About Page")
})

route.get('/contact', (req, res) => {
    res.send("This is our Contact Page")
})

app.use('/', route);

app.listen(2000);