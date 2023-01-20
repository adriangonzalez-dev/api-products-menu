const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    active: {
        type: Boolean,
        default: true,
    }
});


CategorySchema.methods.toJSON = function() {
    const { __v, active, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Category', CategorySchema );