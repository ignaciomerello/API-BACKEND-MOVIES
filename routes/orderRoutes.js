const router = require('express').Router();

const orderController = require('../controllers/orderController');

const auth = require('../middleware/auth');

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", auth, orderController.create);


module.exports = router;