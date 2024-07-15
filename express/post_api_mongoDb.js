const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.use(express.json());

app.post('/employees', async (req, res) => {
    try {
        const { name, email, position, department } = req.body;

        const newEmployee = new Employee({
            name,
            email,
            position,
            department
        });

        const employee = await newEmployee.save();
        res.json(employee);
    }
    catch (error) {
        console.log("Error saving Data: ", error);
        res.status(500).send("Server Error");
    }
});

app.listen(2000, () => {
    console.log("Server is running on port no 2000");
})