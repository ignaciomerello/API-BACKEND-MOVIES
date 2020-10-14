const router = require('express').Router();

const orderController = require('../controllers/orderController');

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);
router.post("/", orderController.create);


module.exports = router;