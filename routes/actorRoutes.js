const router = require('express').Router();

const movieController = require('../controllers/movieController');

router.get("/", movieController.getAll);
router.get("/:id", movieController.getById);
router.post("/", movieController.create);
router.delete("/:id", movieController.delete);


module.exports = router;