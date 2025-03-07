import express from 'express'
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
//import User from './models/user.js'
// const Sequelize = require ('@sequelize/core')
// const PostgresDialect = require('@sequelize/core')
const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'postgres',
    user: 'luke',
    password: 'mPcYQ1wzj4YNRjANK9Jkr2G88fUHrGVG',
    host: 'dpg-cv5j95qn91rc7399prgg-a.oregon-postgres.render.com/cvhs_web_backend',
    port: 5432,
    clientMinMessages: 'notice',
  });
  //postgresql://luke:mPcYQ1wzj4YNRjANK9Jkr2G88fUHrGVG@dpg-cv5j95qn91rc7399prgg-a.oregon-postgres.render.com/cvhs_web_backend
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
    //const users = User.findAll()
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);