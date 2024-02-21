require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const usersRoutes = require('./src/api/routes/user');
const labelRoutes = require('./src/api/routes/label');
const bandsRoutes = require('./src/api/routes/band');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

const app = express();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(cors());

app.use(express.json());

app.use('/api/v1/labels', labelRoutes);
app.use('/api/v1/bands', bandsRoutes);
app.use('/api/v1/users', usersRoutes);

app.use('*', (req, res, next) => {
  return res.status(404).json('404 Route Not Found');
});

app.listen(3000, () => {
  console.log('SERVER desplegado en http://localhost:3000');
});
