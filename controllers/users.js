const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');


const getUsers = async (req = request, res = response) => {

    // TODO: create users by page
    const { limit = 5, to = 0 } = req.query;

    const [total, users] = await Promise.all([
        User.countDocuments({ state: true }),
        User.find({ state: true })
            .skip(Number(to))
            .limit(Number(limit)),
    ]);

    res.json({ total, users });

}

const postUsers = async (req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });


    // encrypt password
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);


    // save to database
    await user.save();

    res.json(user);
}

const putUser = async (req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        // encrypt password
        const salt = bcryptjs.genSaltSync(10);
        rest.password = bcryptjs.hashSync(password, salt);
    }

    // TODO: validate ID and Update
    const user = await User.findByIdAndUpdate(id, rest);

    res.json(user);
}


const deleteUser = async (req, res = response) => {

    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    res.json({
        user
    })
}


module.exports = {
    getUsers,
    putUser,
    postUsers,
    deleteUser
}