const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://farzeenaliwebdeveloper:mMeIbwSPKYuvac3b@cluster0.mztixhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Mongo DB Connected Successfully")
    }
    catch (err) {
        console.log("Mongo DB Connection Error: ", err);
    }
}

module.exports = connectDB;