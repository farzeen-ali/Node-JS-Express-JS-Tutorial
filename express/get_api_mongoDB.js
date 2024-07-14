const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        console.error("Error fetching Employees Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg : 'Employee Not Found'})
        }
        res.json(employee)
    }
    catch (error) {
        console.error("Error fetching Employee Data: ", error);
        res.status(500).send("Server Error");
    }
})

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})