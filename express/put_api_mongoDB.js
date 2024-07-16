const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

app.use(express.json());

app.put('/employee/:id', async (req, res) => {
    try{
        const employeeId = req.params.id;
        const { name, email, position, department } = req.body;
        const updateEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            { name, email, position, department },
            { new : true }
        );
        if(!updateEmployee){
            return res.status(404).json({ msg: "Employee not Found"})
        }
        res.json(updateEmployee);
    }
    catch (error) {
        console.log("Error updating Employee Data: ",error);
        res.status(500).send("Server Error");
    }
})

app.listen(2000, () => {
    console.log("Server is running on port no 2000")
})