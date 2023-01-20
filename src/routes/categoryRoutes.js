const {Router} = require('express');
const router = Router();

//helpers

//midlewares
const {catchErrors} = require('../middlewares');

//controllers
const { getCategories, 
        createCategory, 
        updateCategory, 
        deleteCategory, 
        getCategoryById} = require('../controllers/categoryController');

//validations
const {idCategoryValidator, categoryValidator} = require('../validations')

//routes
router.get('/', getCategories)

router.get('/:id',
    idCategoryValidator,
    catchErrors,
    getCategoryById)

router.post('/',
    categoryValidator,
    catchErrors,
    createCategory)

router.put('/:id',
    idCategoryValidator,
    categoryValidator,
    catchErrors,
    updateCategory)

router.delete('/:id',
    idCategoryValidator,
    catchErrors,
    deleteCategory)

module.exports = router