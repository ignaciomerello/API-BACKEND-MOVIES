const router = require('express').Router();

const movieController = require('../controllers/movieController');

router.get("/", movieController.getAll);


module.exports = router;