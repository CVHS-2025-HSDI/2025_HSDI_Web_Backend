import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize'

import {sequelize} from './user.js'


const Admin = sequelize.define(
    'Admin',
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
      classRequests:{
        type: DataTypes.ARRAY(DataTypes.JSON),
      }
    },
    {
      // Other model options go here
      
    },
  );
  
  export {Admin, sequelize}