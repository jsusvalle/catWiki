const {Router} = require('express');
const { 
    searchTermBreeds, 
    getMostSearchBreeds, 
    getBreedsByName, 
    getImagesBreed 
} = require('../controllers/customApiCats');

const router = Router();

router.get('/searchbyname', searchTermBreeds);
router.get('/mostsearched', getMostSearchBreeds);
router.get('/search', getBreedsByName);
router.get('/searchimage', getImagesBreed);

module.exports = router;