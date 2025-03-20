import Sequelize from 'sequelize'
import express from 'express'
import cors from 'cors'
import {User} from './models/user.js'

const app = express()
const port = 3200


app.use(cors())

  
User.sync() //create table User if doesn't exist

const jane = await User.create({ firstName: 'liam', lastName:'zadoorian' });
// Jane exists in the database now!
console.log(jane instanceof User); // does jane exist
console.log(jane.firstName); 
  
  // `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // should be true
const users = await User.findAll() // select all users
  
app.get('/', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(users,null,2))
})

app.get('/MainPage', (req, res) => {
    // res.send('Hello World!')
   
  res.send(JSON.stringify(users,null,2))
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})