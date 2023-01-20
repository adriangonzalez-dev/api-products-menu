const { Schema, model } = require('mongoose');

const OrderSchema = Schema({
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    subtotal: {
        type: Number,
        default: 0
    },
    paid: {
        type: Boolean
    },
    products: {
        type: [{
            id:Schema.Types.ObjectId,
            cant:Number
        }],
        ref: 'Product',
        required: true
    }
});


OrderSchema.methods.toJSON = function() {
    const { __v, active, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Order', OrderSchema );