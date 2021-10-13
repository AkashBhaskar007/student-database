const express = require('express');
require('dotenv').config()
require('./dbconfig/databaseconfig');
const bodyParser = require('body-parser');
const app = express();
const studentrouter = require('./routes/student');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
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

