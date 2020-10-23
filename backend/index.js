const NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({path: `.env.${NODE_ENV}`});

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/catsBreads');

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/breeds', apiRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Working in port: ${PORT}`);
});