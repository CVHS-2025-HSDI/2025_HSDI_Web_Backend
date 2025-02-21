const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request body
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
