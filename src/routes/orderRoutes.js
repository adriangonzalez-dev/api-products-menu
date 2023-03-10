const {Router} = require('express');
const router = Router();

//helpers

//midlewares
const {catchErrors} = require('../middlewares');

//controllers
const {createOrder} = require('../controllers/OrderController');
const {process,feedback} = require('../controllers/mpController')

//validations
const {orderCreateValidations} = require('../validations')

//routes
router.post('/', orderCreateValidations,catchErrors,createOrder);
router.post('/checkout',process);
router.get('/feedback',feedback)

module.exports = router