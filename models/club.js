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
      clubImageLink:{
        type: DataTypes.TEXT,

      },
      clubDescription:{
        type: DataTypes.TEXT,
      },
      president:{
        type: DataTypes.STRING,
      },
      vicePresident:{
        type: DataTypes.STRING,
      },
      roomNumber:{
        type: DataTypes.INTEGER,
      },
      clubContact:{
        type: DataTypes.STRING,
      },
      clubAdvisor:{
        type: DataTypes.STRING,
      },
      meetingDate:{
        type: DataTypes.STRING,
      },
      qualifications:{
        type: DataTypes.STRING,
      },
      clubType:{
        type: DataTypes.STRING,
      }

    },
    {
      // Other model options go here
      freezeTableName: true,
    },
  );

  export {Club, sequelize}