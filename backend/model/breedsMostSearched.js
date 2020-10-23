const mongoose = require('mongoose');

const breedsMostSearched = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    breedId: {
        type: String,
        required: true,
    },
    imageUrl: String,
    searchCount: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('breeds', breedsMostSearched);