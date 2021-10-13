const router = require('express').Router()
const {
    addStudentController,
    deleteStudentController,
    updateStudentController,
    showStudentController
} = require('../modules/controller');


//Add Student
router.post('/addStudent', addStudentController);

//DELETE STUDENT
router.delete('/deleteStudent/:id', deleteStudentController);

//UPDATE STUDENT DETAILS
router.put('/updateStudent/:id', updateStudentController);

//VIEW STUDENT DETAILS
router.get('/showStudent/:id', showStudentController);

module.exports = router;


