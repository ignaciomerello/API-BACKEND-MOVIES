const router = require('express').Router();

const userController = require('../controllers/userController');

router.post("/signIn", userController.signup);
router.post("/logIn", userController.login);
router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.delete("/:id", userController.delete);

module.exports = router;