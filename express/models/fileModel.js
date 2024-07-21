const mongoose = require('mongoose');

const fileModel = new mongoose.Schema({
    filePath : String
})

module.exports = mongoose.model('File', fileModel);