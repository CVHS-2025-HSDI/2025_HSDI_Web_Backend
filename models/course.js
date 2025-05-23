import { Sequelize, DataTypes } from 'sequelize';

/*
READ ME

new course table based on what I had on my own postgres database.
Please make your table look like this on your postgres database
make the changes to the credentials below to connect to your postgres database as needed.
*/
import {sequelize} from './user.js'

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  coursedescription: {
    type: DataTypes.TEXT,
  },
  subject: {
    type: DataTypes.STRING(255),
  },
  difficulty: {
    type: DataTypes.REAL,
  },
  department: {
    type: DataTypes.TEXT,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
  prerequisites: {
    type: DataTypes.TEXT,
  },
  gradelevels: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
}, {
  tableName: 'course',
  timestamps: false,
});

try {
  await sequelize.authenticate();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export { Course, sequelize };
