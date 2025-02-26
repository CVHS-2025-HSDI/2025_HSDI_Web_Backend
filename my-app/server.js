const express = require('express');
const { User } = require('./models'); // Import Sequelize models
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route to get all users
app.get('/', async (req, res) => {
  // const users = await User.findAll();
  // res.json(users);
  res.send("Hello world");
});

// Route to create a new user
app.post('/users', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = await User.create({ firstName, lastName, email });
  res.json(user);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
