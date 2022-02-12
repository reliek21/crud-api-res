const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        uniqued: true
    },
    password: {
        type: String,
        required: true
    },
    google: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    img: {
        type: String
    },
    state: {
        type: Boolean,
        default: true
    }
});

UserSchema.methods.toJSON = function () {
    const { __v, password, ...user } = this.toObject();
    return user;
}


module.exports = model('User', UserSchema);