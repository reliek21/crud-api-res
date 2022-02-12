const { Schema, model } = require('mongoose');


const CategorySchema = Schema({
    name: {
        type: String,
        required: true,
    }
});


CategorySchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}


module.exports = model('Category', CategorySchema);