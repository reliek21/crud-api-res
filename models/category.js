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


module.exports = model('Category', CategorySchema);