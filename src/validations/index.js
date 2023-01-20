const {idCategoryValidator} = require('./categories/idCategoryValidator');
const {categoryValidator} = require('./categories/categoryValidator');
const {idProductValidator} = require('./products/idProductValidator');
const {productValidator} = require('./products/productValidator');
const {orderCreateValidations} = require('./orders/createOrderValidation')

module.exports = {
    idCategoryValidator,
    categoryValidator,
    idProductValidator,
    productValidator,
    orderCreateValidations
}