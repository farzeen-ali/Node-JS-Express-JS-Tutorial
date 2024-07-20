const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();
connectDB();

app.get('/search-emp/:value', async(req, res) => {
    let searchValue = req.params.value;
    let result = await Employee.find({
        "$or" : [
            {"name" : {$regex : searchValue, $options : "i"}},
            {"email" : {$regex : searchValue, $options : "i"}},
            {"position" : {$regex : searchValue, $options : "i"}},
            {"department" : {$regex : searchValue, $options : "i"}}
        ]
    });
    res.send(result);
})

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
});