const { response } = require('express');


const getUsers = (req, res = response) => {
    res.json({
        ok: true,
        "msg": "get API - controller"
    });
}


module.exports = {
    getUsers
}