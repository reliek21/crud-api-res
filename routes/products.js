const { Router } = require('express');
const { check } = require('express-validator');


const { getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct } = require('../controllers/products');


const { isExistCategoryById, isExistProductById } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');


const router = Router();


// products routes
// get all products
router.get('/', getProducts);


// get product by id
router.get('/:id', [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(isExistProductById),
    validateFields
], getProduct);


// checkProducts
const checkProducts = (para) => {
    return check(`${para}`, `${para} is required`)
        .not()
        .isEmpty();
}

// create product
router.post('/', [
    checkProducts('name'),
    checkProducts('code'),
    checkProducts('description'),
    checkProducts('brand'),
    checkProducts('price'),
    check('category', 'Category is not valid ID').isMongoId(),
    check('category').custom(isExistCategoryById),
    validateFields
], createProduct);


// update product
router.put('/:id', [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(isExistProductById),
    validateFields
], updateProduct);


// delete product
router.delete('/:id', [
    check('id', 'Is not valid ID').isMongoId(),
    check('id').custom(isExistProductById),
    validateFields
], deleteProduct);




module.exports = router;