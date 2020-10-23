const mongoose = require('mongoose');
const NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({path: `.env.${NODE_ENV}`});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB CONNECT')
    } catch (err) {
        console.log(err);
        process.exit(1); 
    }
}

module.exports = connectDB;