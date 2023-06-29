
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  aclass: String
});


const stu = mongoose.model('students', studentSchema);

const insertStudent = async (studentData) => {
  try {
    const result = await stu.create(studentData);
    console.log(`Inserted student ${result.name} with ID ${result._id}`);
  } catch (error) {
    console.error('Failed to insert student:', error);
  }
};

const listStudents = async () => {
  
    const list = await stu.find();
    console.log(list);
    return list;
  
};


module.exports = {insertStudent,listStudents} ;