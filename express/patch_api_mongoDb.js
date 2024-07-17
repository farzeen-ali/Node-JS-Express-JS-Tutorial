const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.use(express.json());

app.patch('/employees/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const updatedData = req.body;

        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { $set: updatedData },
            { new : true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ msg : "Employee not found"})
        }
        res.json(updatedEmployee)
    }
    catch (error) {
        console.log("Error updating Data: ", error);
        res.status(500).send("Server Error")
    }
})

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})