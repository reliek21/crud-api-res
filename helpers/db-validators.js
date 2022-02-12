const Role = require('../models/role');
const User = require('../models/user');
const Category = require('../models/category');
const Product = require('../models/product');


const isValidRole = async (role = '') => {
    const roleExist = await Role.findOne({ role });

    if (!roleExist) {
        throw new Error(`The role ${role} is not in the DB`);
    }
}

// TODO: custom validation email
const isExistEmail = async (email = '') => {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
        throw new Error(`The email ${email} is already`);
    }
}

// TODO: custom validation user ID
const isExistUserId = async (id) => {
    const idExist = await User.findById(id);
    if (!idExist) {
        throw new Error(`The id ${id} does not exist`);
    }
}

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
    isValidRole,
    isExistEmail,
    isExistUserId,
    isExistCategoryById,
    isExistProductById
}