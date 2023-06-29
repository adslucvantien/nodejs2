const { insertStudent , listStudents } = require('./models/student');
const connectDB = require('./db/conn');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

      
    
connectDB();
      


app.get('/', (req, res) => {
    res.send('Welcome to my app!');
  });

  app.post('/add', async (req, res) => {
    try {
      const { name, age, aclass } = req.body;
  
      if (!name || !age || !aclass) {
        return res.status(400).send('Required fields are missing');
      }
  
  
      const newStudent = {
        name: name,
        age: age,
        aclass: aclass,
      };
  
      await insertStudent(newStudent);
  
      res.send('Student inserted successfully!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
    }
  });
  

app.get('/list', async (req, res) => {
  //try {

    const students = await listStudents();
    console.log(students);

    res.json(students);
 // } catch (error) {
   // console.error('Error retrieving students:', error);
   // res.status(500).json({ error: 'Failed to retrieve students' });
 // } finally {
  //  mongoose.disconnect();
  //}
});




const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


