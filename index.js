require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const usersRoutes = require('./src/api/routes/user');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/users', usersRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('404 Route Not Found');
});

app.listen(3000, () => {
  console.log('SERVER desplegado en http://localhost:3000');
});
