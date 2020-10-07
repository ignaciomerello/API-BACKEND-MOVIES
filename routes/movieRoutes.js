const router = require('express').Router();

const movieController = require('../controllers/movieControllers');

router.get("/", movieController.getAll);


module.exports = router;