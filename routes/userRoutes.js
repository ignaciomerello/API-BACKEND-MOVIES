const router = require('express').Router();

const userController = require('../controllers/userController');

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.delete("/:id", userController.delete);




module.exports = router;