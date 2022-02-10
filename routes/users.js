const { Router } = require('express');
const { 
    getUsers, 
    putUser, 
    postUsers } = require('../controllers/users');

const router = Router();


// routes
router.get('/', getUsers);
router.put('/:id', putUser);
router.post('/', postUsers);


module.exports = router;