const {Router} = require('express');
const router = Router();
const {productImage, catchErrors} = require('../middlewares');
const {idProductValidator} = require('../validations');
const { updateImageCloudinary } = require('../controllers/uploadFilesController');

router.put('/:id',
    idProductValidator,
    productImage.single('img'),
    catchErrors,
    updateImageCloudinary);

module.exports = router