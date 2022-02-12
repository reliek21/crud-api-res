const Category = require('../models/category');
const Product = require('../models/product');



// TODO: validate category by ID
const isExistCategoryById = async (id) => {
    const categoryExist = await Category.findById(id);
    if (!categoryExist) {
        throw new Error(`The id ${id} does not exist`);
    }
}


// TODO: validate product by ID
const isExistProductById = async (id) => {
    const productExist = await Product.findById(id);
    if (!productExist) {
        throw new Error(`The id ${id} does not exist`);
    }
}


module.exports = {
    isExistCategoryById,
    isExistProductById
}