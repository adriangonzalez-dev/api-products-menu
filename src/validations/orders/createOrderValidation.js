const {check} = require('express-validator');

const orderCreateValidations = [
    check('chart', 'No se puede generar una orden vacia').isArray().notEmpty(),
    check('subtotal', 'No se puede cargar un pedido vacío').isInt({min:1}),
    check('paid','Debe verificar metodo de pago').isBoolean()
]

module.exports = {
    orderCreateValidations
}