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

    //TODO: verify the email


    // TODO: encrypt password
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

const putUser = (req, res = response) => {
    const { id } = req.params.id;

    res.json({
        ok: true,
        "msg": "put API - controller",
        id
    });
}


module.exports = {
    getUsers,
    putUser,
    postUsers
}