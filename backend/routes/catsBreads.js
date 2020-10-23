const {Router} = require('express');
const { getMostSearchBreeds, getBreedsByName, getImagesBreed } = require('../controllers/customApiCats');

const router = Router();

router.get('/mostsearched', getMostSearchBreeds);
router.get('/search', getBreedsByName);
router.get('/searchimage', getImagesBreed);

module.exports = router;