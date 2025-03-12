import Sequelize from 'sequelize'
const sequelize = new Sequelize('postgres://postgres:test123@10.1.10.237:5432/postgres') // Example for postgres
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }