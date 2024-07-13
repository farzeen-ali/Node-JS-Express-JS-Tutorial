const express = require('express');
const connectDB = require('./db/db_connection')
const Employee = require('./models/employeeModel');

const app = express();
connectDB();

const getEmployees = async () => {
    const employees = await Employee.find();
    console.log("Employees Data: ", employees);
}

const updateEmployee = async (id, updatedData) => {
    const result = await Employee.updateOne({ _id: id}, { $set: updatedData});
    console.log(
        result.nModified === 0 ? `No updates for employee ${id}` : 'Updated Employee Data:' ,result
    )
}

const deleteEmployee = async (id) => {
    await Employee.findByIdAndDelete(id);
    console.log(`Employee ${id} deleted`)
}

const main = async () => {
    await getEmployees();

    const employeeID = '6692bb9c2699e7651926ad40';
    const updatedData = {
        position : 'Senior SE',
        department : "DEV"
    };

    await updateEmployee(employeeID, updatedData);
    await getEmployees();

    await deleteEmployee(employeeID);
    await getEmployees();
}

main();

app.listen(2000);