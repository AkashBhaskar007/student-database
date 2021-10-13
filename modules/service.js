const Studentdetails = require('../models/studentdetails');

exports.addStudentDetails = async (params) => {
    let studentdetails = new Studentdetails(params);
    studentdetails.save();
    return studentdetails;
}

exports.deleteStudentDetails = async (id) => {
    const deleteData = await Studentdetails.deleteOne({ _id: id })
    if (deleteData.deletedCount < 1)
        return false;
    return true;
}



exports.updateStudentDetails = async (updatedata) => {
    const updatedatas = await Studentdetails.updateOne({ _id: updatedata.id }, {
        firstName: updatedata.firstName,
        lastName: updatedata.lastName,
        address: updatedata.address,
        grade: updatedata.grade
    })
    if (updatedatas.modifiedcount < 1)
        return false;
    return true;
}


exports.showStudentDetails = async (id) => {
    const students = await Studentdetails.findById({ _id: id })
    if (!students)
        return false;
    return students;
}