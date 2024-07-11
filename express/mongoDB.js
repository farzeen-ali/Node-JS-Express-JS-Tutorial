const express = require('express');
const connectDB = require('./db/db_connection');

const app = express();

connectDB();

const user = require('./models/userModel');

const addUser = async () => {
    await user.create({
        name : "Farzeen",
        email : "farzeen@gmail.com"
    })
}

addUser();

app.listen(2000, () => {
    console.log("Server is running on Port no 2000")
})