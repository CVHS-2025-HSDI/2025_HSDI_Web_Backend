require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express()
const port = 4000

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'AJOh01252008',
    port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/courses', async (req, res) => {
//     try {
//         const result = await pool.query("SELECT * FROM Course");
//         res.json(result.rows);
//     } catch (error) {
//         console.error("Error fetching courses: ", error);
//         res.status(500).json({error: "Internal server error"})
//     }
// })
app.get('/courses', async (req, res) => {
    const { department, tag, gradeLevels } = req.query;
    let query = 'SELECT * FROM course WHERE 1=1';
    let values = [];

    if (department) {
        values.push(department);
        query += ` AND department = $${values.length}`;
    }
    if (tag) {
        values.push(tag);
        query += ` AND $${values.length} = ANY(tags)`;
    }
    if (gradeLevels && gradeLevels.length > 0) {
        values.push(gradeLevels.map(Number)); // Convert to integer array
        query += ` AND gradelevels @> $${values.length}::int[]`;
    }
    // if (gradeLevels.length > 0) {
    //     console.log("helloQ");
    // }

    try {
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})