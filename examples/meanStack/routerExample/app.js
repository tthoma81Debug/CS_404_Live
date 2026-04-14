// app.js
const express = require('express');
const app = express();

// built-in middleware to parse JSON bodies
app.use(express.json());

// import routers
const userRouter = require('./routes/users');

// mount routers
app.use('/api/users', userRouter); // all /api/users/* routes handled by userRouter

// simple root route
app.get('/', (req, res) => {
  res.send('API is running');
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(" ");
});