const express = require('express');

const app = express();

app.get('', (req, res) => {
    // res.send("Routing Parameters in Express JS")
    const name = req.query.name;
    if (name) {
        res.send(`Welcome ${name}`)
    }
    else {
        res.send("Routing Parameters in Express JS")
    }
})

app.listen(2000, () => {
    console.log("Server is running on Port 2000")
})
