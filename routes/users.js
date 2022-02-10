const { Router } = require('express');
const { getUsers, putUser } = require('../controllers/users');

const router = Router();


// routes
router.get('/', getUsers);
router.put('/:id', putUser);
router.post('/', putUser);


module.exports = router;