const router = require('express').Router();

const orderController = require('../controllers/orderController');

router.get("/", orderController.getAll);
router.get("/:id", orderController.getById);


module.exports = router;