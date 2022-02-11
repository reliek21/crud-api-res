const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const getUsers = (req = request, res = response) => {
    const { name, country } = req.query;

    res.json({
        ok: true,
        "msg": "get API - controller",
        name,
        country
    });
}

const postUsers = async (req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });


    // encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);


    // save to database
    await user.save();

    res.json({
        ok: true,
        "msg": "post API - controller",
        user
    });
}

const putUser = async (req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    // TODO: validate ID
    if (password) {
        // encrypt password
        const salt = bcryptjs.genSaltSync(10);
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json({
        ok: true,
        "msg": "put API - controller",
        user
    });
}


module.exports = {
    getUsers,
    putUser,
    postUsers,
}