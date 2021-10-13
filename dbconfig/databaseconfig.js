const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentdatabase");
mongoose.set("debug", true);
console.log("DB has been connected successfully");

