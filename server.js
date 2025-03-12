import Sequelize from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:test123@10.1.10.237:5432/postgres') // Example for postgres
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  import { DataTypes } from 'sequelize';
  
  const User = sequelize.define(
    'User',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    },
  );
User.sync()
const jane = await User.create({ firstName: 'Jane', lastName:'zadoorian' });
// Jane exists in the database now!
console.log(jane instanceof User); // true
console.log(jane.firstName); // "Jane"
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

 import express from 'express'
  const app = express()
  const port = 3000
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  //  const user = User.findAll()
    res.send(jane.toJSON())
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })