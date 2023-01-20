const {check} = require('express-validator');
const { validCategory,validProductName } = require('../../helpers/db-validators')

const productValidator = [
    check('name','El nombre es obligatorio').notEmpty(),
    check('name').custom(product=> validProductName(product)),
    check('category').custom(category => validCategory(category)),
    check('price','El precio es obligatorio').notEmpty(),
]

module.exports = {
    productValidator
}