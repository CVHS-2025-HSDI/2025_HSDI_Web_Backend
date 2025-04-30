import Sequelize, { Op } from 'sequelize';
import express from 'express';
import cors from 'cors';
import { Course } from './models/course.js';
import { sequelize } from './models/course.js';

const app = express();
const port = 4000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Connect and prepare database
await sequelize.authenticate();
await Course.sync();


app.get('/course-search', async (req, res) => {
  try {
    const { department, tag, name, gradeLevels } = req.query;

    const whereClause = {};

    if (department) {
      whereClause.department = department;
    }

    if (tag) {
      whereClause.tags = {
        [Op.contains]: [tag],
      };
    }

    if (gradeLevels) {
      const gradeArray = Array.isArray(gradeLevels)
        ? gradeLevels.map(Number)
        : [Number(gradeLevels)];
      whereClause.gradelevels = {
        [Op.contains]: gradeArray,
      };
    }

    if (name) {
      whereClause.name = {
        [Op.iLike]: `%${name}%`, // case-insensitive LIKE
      };
    }

    const courses = await Course.findAll({ where: whereClause });
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    res.status(500).send('Server Error');
  }
});

app.get('/MainPage', async (req, res) => {
  try {
    const courseImages = await Course.findAll({
      attributes: ['courseImageLink'],
    });
    res.json(courseImages);
  } catch (err) {
    console.error('Error fetching course images:', err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
