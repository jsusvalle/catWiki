const axios = require('axios');

const URL_BASE = process.env.CATAPI_URL || 'https://api.thecatapi.com/v1';
const API_KEY = process.env.CATAPI_KEY || '';

const instanceApi = axios.create({
    baseURL: URL_BASE,
    headers: {
    'x-api-key': API_KEY,
    },
});

module.exports = instanceApi;
