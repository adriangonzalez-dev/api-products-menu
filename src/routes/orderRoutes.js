const {Router} = require('express');
const router = Router();

//helpers

//midlewares

//controllers
const {createOrder} = require('../controllers/OrderController')
//validations

//routes
router.post('/', createOrder)

module.exports = router