const { Router } = require('express');
const { check } = require('express-validator');
const { isValidObjectId } = require('mongoose');

const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory } = require('../controllers/categories');

const { isExistCategoryById } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');


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


// checkProducts
const checkProducts = (para) => {
    return check(`${para}`, `${para} is required`)
        .not()
        .isEmpty();
}


// create category
router.post('/', [
    checkProducts('code'),
    checkProducts('name'),
    checkProducts('description'),
    validateFields
], createCategory);


// update category
router.put('/:id', [
    check('name', 'name is required').not().isEmpty(),
    validateFields
], updateCategory);


// delete category
router.delete('/:id', [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(isExistCategoryById),
    validateFields
], deleteCategory);




module.exports = router;