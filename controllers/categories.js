const { response, request } = require('express');
const Category = require('../models/category');


const createCategory = async (req = request, res = response) => {
    const name = req.body.name.toUpperCase();
    const categoryDB = await Category.findOne({ name });

    if (categoryDB) {
        return res.status(400).json({
            msg: `The category ${categoryDB.name} exist`
        });
    }

    // generate data
    const data = {
        name
    }

    const category = new Category(data);

    // save DB
    await category.save();

    res.status(201).json(category);

}




module.exports = {
    createCategory
};