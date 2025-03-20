import { DataTypes } from 'sequelize';
import Sequelize from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:test123@10.1.10.237:5432/postgres') // Example for postgres


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

  export {User, sequelize}