const { Router } = require('express');
const { check } = require('express-validator');

const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory } = require('../controllers/categories');

const { isExistCategoryById } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');
// const { findByIdAndDelete } = require('../models/category');


const router = Router();


// categories routes
// get all categories
router.get('/', getCategories);


// get category by id
router.get('/:id', [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(isExistCategoryById),
    validateFields
], getCategory);


// create category
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    validateFields
], createCategory);


// update category
router.put('/:id', [
    check('name', 'name is required').not().isEmpty(),
    check('id').custom(isExistCategoryById),
    validateFields
], updateCategory);


// delete category
router.delete('/:id', [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(isExistCategoryById),
    validateFields
], deleteCategory);




module.exports = router;