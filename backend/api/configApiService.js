const axios = require('axios');
const NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({path: `.env.${NODE_ENV}`});

const URL_BASE = process.env.CATAPI_URL || ''; 
const API_KEY = process.env.CATAPI_KEY || ''; //CatApi Key

const instanceApi = axios.create({
    baseURL: URL_BASE,
    headers: {
    'x-api-key': API_KEY,
    },
});

module.exports = instanceApi;
