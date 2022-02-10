const { response, request } = require('express');


const getUsers = (req = request, res = response) => {
    const {name, country} = req.query;

    res.json({
        ok: true,
        "msg": "get API - controller",
        name,
        country
    });
}

const postUsers = (req, res = response) => {
    const { nombre, isAdmin } = req.body;

    res.json({
        ok: true,
        "msg": "get API - controller",
        nombre,
        isAdmin
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