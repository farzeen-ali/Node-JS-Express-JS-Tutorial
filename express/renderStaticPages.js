const express = require('express');
const path = require('path');

const app = express();

const public = path.join(__dirname, 'public');
console.log(public);

app.use(express.static(public));
app.listen(2000);