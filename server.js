import express from 'express'
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
// const Sequelize = require ('@sequelize/core')
// const PostgresDialect = require('@sequelize/core')
const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'postgres',
    user: 'postgres',
    password: 'test123',
    host: '10.1.10.237',
    port: 5432,
    ssl: true,
    clientMinMessages: 'notice',
  });

const app = express();
const PORT = 5000;

app.use(express.json());

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);