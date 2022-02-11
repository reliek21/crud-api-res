const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole, isExistEmail } = require('../helpers/db-validators');
const {
    getUsers,
    putUser,
    postUsers } = require('../controllers/users');


const router = Router();


// routes
router.get('/', getUsers);
router.put('/:id', putUser);
router.post('/', [
    // validations
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must be six or more characters long').isLength({ min: 3 }),
    check('email').custom(isExistEmail),
    // TODO: create role
    check('role').custom(isValidRole),
    validateFields
], postUsers);


module.exports = router;