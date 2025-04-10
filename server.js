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
const compsci = await Course.create({courseName: 'Super AP', courseID: 0, courseImageLink:'https://media.licdn.com/dms/image/v2/D5603AQHtpGYOHCFqEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700094847802?e=2147483647&v=beta&t=FXRWjsZOgvsyeZ0ko1Ds2ZYIdqhwKzCtEvoy8BiQaaE'});
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