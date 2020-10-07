const router = require('express').Router();

const movieController = require('../controllers/movieControllers');

router.get("/", movieController.getAllMovies);


module.exports = router;