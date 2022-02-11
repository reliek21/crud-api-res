const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const {
    getUsers,
    putUser,
    postUsers } = require('../controllers/users');


const router = Router();


// routes
router.get('/', getUsers);
router.put('/:id', putUser);
router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must be six or more characters long').isLength({ min: 3 }),
    check('email', 'The email is not valid').isEmail(),
    check('role', 'The role is not valid').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validateFields
], postUsers);


module.exports = router;