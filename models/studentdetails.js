const mongoose = require('mongoose');

const studentdetailsSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    address:String,
    grade: Number
      
});
module.exports = mongoose.model('Studentdetails', studentdetailsSchema);