import express from 'express'
import cors from 'cors'
import {User, sequelize} from './models/user.js'
import { Course } from './models/course.js'
import { Club } from './models/club.js'
import {Admin} from './models/admin.js'
import {addUser, addCourse, addClub} from './add.js'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import Sequelize, { Op } from 'sequelize';

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

await User.sync();
await Course.sync();
await Club.sync();
await Admin.sync();
const hashed = await bcrypt.hash('test123', 4)

addUser('liam', 'zadoorian', 'xc5life', hashed, 'example@gmail.com', {blah: 'blah'}, {blah: 'blah'}, {blah: 'blah'})



console.log('does user exist')
console.log(User === sequelize.models.User);

  // `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // should be true
// const users = await User.findAll() // select all users
const firstnames = await User.findAll({
  attributes: ['firstName'],
})

const courses = await Course.findAll();
  
app.get('/', async (req, res) => {
    // res.send('Hello World!')
  const users = await User.findAll()
  res.send(users)
})


app.get('/ClubDescription', async (req, res)=>{
  const clubs = await Club.findAll()
  res.send(clubs)
})
app.get('/CourseDescription', async (req, res )=>{
  const courses = await Course.findAll();
  res.send(courses)
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
app.post('/SignUp', async (req,res)=>{
  let username = req.body.user;
  let password = req.body.passwd;
  let useremail = req.body.email;
  let firstname = req.body.firstname;
  let lastname= req.body.lastname;
  let current_Schedule = req.body.current_Schedule;
  let final_Schedule = req.body.final_Schedule;
  let temp_Schedule = req.body.temp_Schedule;
  if(username == ''){
    res.send('Username blank');
    return;
  };
  if(password == ''){
    res.send('Password blank');
    return;
  };
  if(useremail == ''){
    res.send('Email blank');
    return;
  };
  if(firstname == ''){
    res.send('First Name blank');
    return;
  };
  if(lastname == ''){
    res.send('Last Name blank');
    return;
  };
  const hashedpassword = await bcrypt.hash(password,10);
  function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  if(valid(useremail)){
    const existUser = await User.findOne({where: {email: useremail}})
    if(existUser){
      res.send('User already exists')
    }
    else{
      addUser(firstname, lastname, username, hashedpassword, useremail, temp_Schedule, final_Schedule, current_Schedule );
      res.send('User created')
    }
  }
  else{
    res.send('Invalid Email')
  }
  
  

})




app.get('/course-search', async (req, res) => {
  try {
    const { department, tag, name, gradeLevels } = req.query;

    const whereClause = {};

    if (department) {
      whereClause.department = department;
    }

    if (tag) {
      whereClause.tags = {
        [Op.contains]: [tag],
      };
    }

    if (gradeLevels) {
      const gradeArray = Array.isArray(gradeLevels)
        ? gradeLevels.map(Number)
        : [Number(gradeLevels)];
      whereClause.gradelevels = {
        [Op.contains]: gradeArray,
      };
    }

    if (name) {
      whereClause.name = {
        [Op.iLike]: `%${name}%`, // case-insensitive LIKE
      };
    }

    const courses = await Course.findAll({ where: whereClause });
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/MainPage', async (req, res) => {
  try {
    const courseImages = await Club.findAll({
      attributes: ['clubImageLink'],
    });
    res.json(courseImages);
  } catch (err) {
    console.error('Error fetching course images:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
