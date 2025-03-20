import Sequelize from 'sequelize'
import express from 'express'
import cors from 'cors'
import {User} from './models/user.js'
import { Course } from './models/course.js'

const app = express()
const port = 3200


app.use(cors())

  
User.sync() //create table User if doesn't exist
await Course.destroy({
  where: {
    courseID: 0,
  },
});
const jane = await User.create({ firstName: 'liam', lastName:'zadoorian' });
const compsci = await Course.create({courseName: 'Super AP', courseID: 0, courseImageLink:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fliam-zadoorian-b84488291&psig=AOvVaw39pQiTNeOm_Hz8Wd_MksyC&ust=1742583015881000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjn8d6pmYwDFQAAAAAdAAAAABAE'});
// Jane exists in the database now!
console.log(jane instanceof User); // does jane exist
console.log(jane.firstName); 
console.log(compsci instanceof Course);
  
  // `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // should be true
const users = await User.findAll() // select all users
const firstnames = await User.findAll({
  attributes: ['firstName'],
})
const courseImages = await Course.findAll({
  attributes:['courseImageLink'],
  where: {
    courseID:0
  }
});

  
app.get('/', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(users,null,2))
})

app.get('/MainPage', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(courseImages,null,2))
})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})