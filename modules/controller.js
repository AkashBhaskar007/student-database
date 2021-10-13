const {
    addStudentDetails, updateStudentDetails, deleteStudentDetails, showStudentDetails
} = require('./service')


exports.addStudentController = async (req, res) => {
    let { firstName, lastName, address, grade } = req.body;
    let studentdetails = {
        firstName,
        lastName,
        address,
        grade
    }
    const student = await addStudentDetails(studentdetails);
    return res.json({
        message: "Student details uploaded!",
        data: student
    })
}



exports.deleteStudentController = async (req, res) => {
    let { id } = req.params;
    const student = await deleteStudentDetails(id);
    console.log(student);
    if (!student)
        return res.status(400).json({ message: "Something went wrong!" })
    return res.json({ message: "Student deleted!" })
}




exports.updateStudentController = async (req, res) => {
    let { firstName, lastName, address, grade } = req.body;
    let { id } = req.params;
    const updatedata = {
        id,
        firstName,
        lastName,
        address,
        grade
    }
    const student = await updateStudentDetails(updatedata);
    if (!student)
        return res.send({ message: 'Something went wrong' })
    return res.send({
        message: 'Updated successfully!',
        data: updatedata
    });
}



exports.showStudentController = async (req, res) => {
    let { id } = req.params;
    const student = await showStudentDetails(id);
    if (!student)
        return res.send({ message: 'No student exists' })
    return res.send({
        message: 'Student exists',
        data: student
    })
}
