const {idCategoryValidator} = require('./categories/idCategoryValidator');
const {categoryValidator} = require('./categories/categoryValidator');
const {idProductValidator} = require('./products/idProductValidator');
const {productValidator} = require('./products/productValidator')

module.exports = {
    idCategoryValidator,
    categoryValidator,
    idProductValidator,
    productValidator
}