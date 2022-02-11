const { response, request } = require('express');
const Category = require('../models/category');


// get categories
const getCategories = async (req = request, res = response) => {
    const { limit = 5, to = 0 } = req.query;
    const query = { state: true };

    const [total, categories] = await Promise.all([
        Category.countDocuments(query),
        Category.find(query)
            .skip(Number(to))
            .limit(Number(limit))
    ]);

    res.json({
        total,
        categories
    });
}

const createCategory = async (req, res = response) => {
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

// get category
const getCategory = async (req, res = response) => {
    const { id } = req.params;
    const category = await Category.findById(id);

    res.json(category);
}


// update category
const updateCategory = async (req, res = response) => {
    const { id } = req.params;
    const data = req.body;

    data.name = data.name.toUpperCase();

    const category = await Category.findByIdAndUpdate(id, data, { new: true });
    res.json(category);
}


// delete category
const deleteCategory = async (req, res = response) => {
    const { id } = req.params;
    const deleteCategory = await Category.findByIdAndDelete(id, { new: true })

    res.json(deleteCategory);
}


module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};