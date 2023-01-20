const {Router} = require('express');
const router = Router();

const { getProducts,
        getProductsById,
        createProduct,
        updateProduct,
        deleteProduct} = require('../controllers/productsController')

const { catchErrors} = require('../middlewares');

const { productValidator,
        idProductValidator } = require('../validations')

router.get( '/', getProducts )

router.get( '/:id',
    idProductValidator,
    catchErrors,
    getProductsById)

router.post('/',
    productValidator,
    catchErrors,
    createProduct)

router.put('/:id',
    idProductValidator,
    productValidator,
    catchErrors,
    updateProduct)

router.delete(  '/:id',
    idProductValidator,
    catchErrors,
    deleteProduct)

module.exports = router