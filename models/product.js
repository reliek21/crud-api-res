const { Schema, model } = require('mongoose');


const ProductSchema = Schema({
    // code: {
    //     type: String,
    //     required: true,
    // },
    name: {
        type: String,
        required: [true, 'The name is required'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    }
});


ProductSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}


module.exports = model('Product', ProductSchema);