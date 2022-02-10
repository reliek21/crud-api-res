const { response, request } = require('express');
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
    const body = req.body;
    const user = new User(body);

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