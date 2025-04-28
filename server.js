import Sequelize from 'sequelize'
import express from 'express'
import cors from 'cors'
import {User, sequelize} from './models/user.js'
import { Course } from './models/course.js'
import { Club } from './models/club.js'
import {Admin} from './models/admin.js'
import {addUser, addCourse, addClub} from './add.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3200

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

User.sync();
Course.sync({force: true});
Club.sync();
Admin.sync();


addUser('liam', 'zadoorian', 'xc4life', 'test123', 'example@gmail.com', {blah: 'blah'}, {blah: 'blah'}, {blah: 'blah'})



console.log('does user exist')
console.log(User === sequelize.models.User);

  // `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // should be true
//const users = await User.findAll() // select all users
const firstnames = await User.findAll({
  attributes: ['firstName'],
})

const courses = await Course.findAll();
  
app.get('/', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(users,null,2))
})

app.get('/MainPage', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(courseImages,null,2))
})
app.get('/ClubDescription', (req, res)=>{
  res.send('club descriptoin')
})
app.get('/CourseDescription', (req, res )=>{
  res.send('coursedescription')
})
app.post('/Login',(req, res)=>{
  let username = req.body.username.toString();
  let password = req.body.password.toString();
  console.log(req.body)
  res.send(`Username: ${username} Password: ${password}`);
  console.log(username, password)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

