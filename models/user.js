import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize'


const sequelize = new Sequelize('postgres://postgres:test123@10.1.10.237/postgres') // Example for postgres
// const sequelize = new Sequelize('testdb', 'postgres', 'AJOh01252008', {
//   host: 'localhost',
//   dialect: 'postgres',
//   port: 5432,
// });


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
      username:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      tempSchedule: {
        type: DataTypes.JSON,
      },
      finalSchedule: {
        type: DataTypes.JSON
      },
      currentSchedule: {
        type: DataTypes.JSON
      }
    },
    {
      // Other model options go here
      
    },
  );

  export {User, sequelize}