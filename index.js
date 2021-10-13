const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config()
const studentrouter = require('./routes/student');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect("mongodb://localhost:27017/studentdatabase");
mongoose.set("debug", true);
console.log("DB has been connected successfully");


app.use('/student', studentrouter);

app.get('/', function (req, res) {
    res.json({
        message: 'Hello Student!'
    })
})
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('Error ', err);
    }
    console.log('Node.js is running at PORT', process.env.PORT)
})

