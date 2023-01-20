const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String
    },
    stock: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    },
    img_public_id: {
        type: String
    }
});


ProductSchema.methods.toJSON = function() {
    const { __v, active, ...data  } = this.toObject();
    return data;
}

module.exports = model( 'Product', ProductSchema );