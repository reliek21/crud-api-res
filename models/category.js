const { Schema, model } = require('mongoose');


const CategorySchema = Schema({
    code: {
        type: String,
        unique: true,
        require: [true, 'Code is required'],
    },
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required'],
        min: [2, 'The code must be at minimum 2 characters in length'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    active: {
        type: Boolean,
        required: [true, 'Active is required'],
        default: true
    }
});


CategorySchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}


module.exports = model('Category', CategorySchema);