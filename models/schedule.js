import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize'
import {sequelize} from './user.js'



const Schedule = sequelize.define(
    'Schedule ',
    {
      // Model attributes are defined here
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseID: {
        type: DataTypes.INTEGER,
         
        // allowNull defaults to true
      },
      courseImageLink:{
        type: DataTypes.STRING,

      }
    },
    {
      // Other model options go here
    },
  );

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  Schedule.sync()

  export {Schedule, sequelize}