const { Schema, model } = require('mongoose');


const ProductSchema = Schema({
    code: {
        type: String,
        unique: true,
        require: [true, 'Code is required'],
        min: [4, 'The code must be at minimum 4 characters in length'],
        max: [10, 'The code must have a maximum of 10 characters']
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        default: 0
    }
});


ProductSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}


module.exports = model('Product', ProductSchema);