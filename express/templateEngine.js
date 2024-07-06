const express =  require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/welcome', (req, res) => {
    const empInfo = {
        name : "Farzeen",
        id : '123'
    }
    res.render('Welcome', {empInfo})
})

app.listen(2000, () => {
    console.log("Server is Running on Port No 2000")
})