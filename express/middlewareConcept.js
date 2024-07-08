const express =  require('express');

const app = express();

const reqFilter = (req, res, next) => {
    const salary = req.query.salary;
    if(!salary) {
        res.send("No Salary Provided")
    }
    else if(salary < 50000) {
        res.send("Your Salary is below 50000")
    }
    else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (req,res) => {
    res.send("This is Our Middleware Tutorial in Express JS")
})

app.get('/about', (req,res) => {
    res.send("This is Our About Page")
})

app.listen(2000, () => {
    console.log("Server is Running on Port No 2000");
})