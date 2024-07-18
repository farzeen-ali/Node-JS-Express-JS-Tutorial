const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.delete('/employees/:id', async (req, res) => {
    try{
        const employeeId = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(employeeId);

        if(!deleteEmployee) {
            return res.status(404).json({ msg: 'Employee Not found'})
        }
        res.json({ msg: 'Employee Deleted successfully'})
    }
    catch (error) {
        console.error("Error while deleting data: ", error);
        res.status(500).send("Server Error")
    }
} )

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})