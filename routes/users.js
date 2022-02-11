const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const {
    getUsers,
    putUser,
    postUsers } = require('../controllers/users');
const { isValidRole } = require('../helpers/db-validators');


const router = Router();


// routes
router.get('/', getUsers);
router.put('/:id', putUser);
router.post('/', [
    // validations
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must be six or more characters long').isLength({ min: 3 }),
    check('email', 'The email is not valid').isEmail(),
    // TODO: create role
    check('role').custom(isValidRole),
    validateFields
], postUsers);


module.exports = router;