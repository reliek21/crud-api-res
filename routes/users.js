const { Router } = require('express');
const { getUsers } = require('../controllers/users');

const router = Router();


// routes
router.get('/', getUsers);


module.exports = router;