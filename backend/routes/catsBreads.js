const {Router} = require('express');
const { getMostSearchBreeds } = require('../controllers/customApiCats');

const router = Router();

router.get('/mostsearched', getMostSearchBreeds);

module.exports = router;