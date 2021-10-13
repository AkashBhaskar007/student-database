const express = require('express');
require('dotenv').config()
const studentrouter = require('./routes/student');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./dbconfig/databaseconfig');
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

