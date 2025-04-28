import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize'
import {sequelize} from './user.js'



const Club = sequelize.define(
    'Club',
    {
      // Model attributes are defined here
      clubName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clubID: {
        type: DataTypes.INTEGER,
         
        // allowNull defaults to true
      },
      clubImageLink:{
        type: DataTypes.STRING,

      },
      clubDescription:{
        type: DataTypes.STRING,
      },
      clubMembers:{
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      roomNumber:{
        type: DataTypes.INTEGER,
      },
      clubContact:{
        type: DataTypes.STRING,
      }
    },
    {
      // Other model options go here
      freezeTableName: true,
    },
  );


  

  export {Club, sequelize}