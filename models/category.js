const { Schema, model } = require('mongoose');


const CategorySchema = Schema({
    // code: {
    //     type: String,
    //     required: true,
    // },
    name: {
        type: String,
        required: [true, 'The name is required'],
    },
    // description: {
    //     type: String,
    //     required: true
    // },
    active: {
        type: Boolean,
        default: true,
        required: true
    }
});


CategorySchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}


module.exports = model('Category', CategorySchema);