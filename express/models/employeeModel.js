const mongoose = require('mongoose');

const employeeModel = new mongoose.Schema({
    name : String,
    email : String,
    position : String, 
    department : String
});

module.exports = mongoose.model('Employee', employeeModel)