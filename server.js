import Sequelize from 'sequelize'
import express from 'express'
import cors from 'cors'
import {User, sequelize} from './models/user.js'
import { Course } from './models/course.js'
import { Club } from './models/club.js'
import {Admin} from './models/admin.js'
import {addUser, addCourse, addClub} from './add.js'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'

const app = express()
const port = 3200

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

User.sync();
Course.sync();
Club.sync();
Admin.sync();
const hashed = await bcrypt.hash('test123', 4)

// addUser('liam', 'zadoorian', 'xc5life', hashed, 'example@gmail.com', {blah: 'blah'}, {blah: 'blah'}, {blah: 'blah'})



console.log('does user exist')
console.log(User === sequelize.models.User);

  // `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // should be true
const users = await User.findAll() // select all users
const firstnames = await User.findAll({
  attributes: ['firstName'],
})

const courses = await Course.findAll();
  
app.get('/', (req, res) => {
    // res.send('Hello World!')
   
  res.send('hello')
})

app.get('/MainPage', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(courses,null,2))
})
app.get('/ClubDescription', (req, res)=>{
  res.send('club descriptoin')
})
app.get('/CourseDescription', (req, res )=>{
  res.send('coursedescription')
})
app.post('/Login', async (req, res)=>{
  let user = req.body.user;
  let password = req.body.passwd;
  console.log(req.body);
  const theUser = await User.findOne({ where: { username: user } });
  if (theUser === null) {
    console.log('Username not found')
    res.send('Username not found')
  }
  else{

  
    const passwordMatch = await bcrypt.compare(password, theUser.password);
    if(!passwordMatch){
      console.log('password incorrect')
      res.send('password incorrect')
    }
    else{
      console.log('login successful');
      res.send('login successful')
      
    }
  }
  
})
app.post('/SignUp', (req,res)=>{
  let username = req.body.user;
  let password = req.body.passwd;
  let email = req.body.email;
  let firstname = req.body.firstname;
  let lastname= req.body.lastname;
  let current_Schedule = req.body.current_Schedule;
  let final_Schedule = req.body.final_Schedule;
  let temp_Schedule = req.body.temp_Schedule;
  const hashedpassword = bcrypt.hash(password,10);
  addUser(firstname, lastname, username, hashedpassword, email, temp_Schedule, final_Schedule, current_Schedule );

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

