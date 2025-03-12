// const { Sequelize, DataTypes } = require('sequelize');
//import sqlite from 'node:sqlite'
import Sequelize from '@sequelize/core'
import { SqliteDialect } from '@sequelize/sqlite3';
const sequelize = new Sequelize({dialect: SqliteDialect,});

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

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
export default User