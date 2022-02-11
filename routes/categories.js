const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validate-fields');

const router = Router();


// categories routes
// get all categories
router.get('/', (req, res) => {
    res.json('TODO OK');
});


// get category by id
router.get('/:id', (req, res) => {
    res.json('get by id');
});


// create category
router.post('/', (req, res) => {
    res.json('post');
});


// update category
router.put('/:id', (req, res) => {
    res.json('update');
});


// delete category
router.delete('/:id', (req, res) => {
    res.json('delete');
});




module.exports = router;