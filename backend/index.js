const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/catsBreads');

const app = express();

connectDB();

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/breeds', apiRoutes);

app.listen(PORT, () => {
    console.log('servidor arrancando');
});