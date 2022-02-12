const { response, request } = require('express');
const Product = require('../models/product');


// get Product
const getProducts = async (req = request, res = response) => {
    const { limit = 5, to = 0 } = req.query;
    const query = { state: true };

    const [total, products] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query).populate('category', 'name')
            .skip(Number(to))
            .limit(Number(limit))
    ]);

    res.json({
        total,
        products
    });
}

// create product
const createProduct = async (req, res = response) => {
    const {...body} = req.body;
    const productDB = await Product.findOne({ name: body.name });

    if (productDB) {
        return res.status(400).json({
            msg: `The product ${productDB.name} exist`
        });
    }

    // generate data
    const data = {
        name: body.name.toUpperCase(),
        ...body
    }

    const product = new Product(data);

    // save DB
    await product.save();

    res.status(201).json(product);

}

// get Product
const getProduct = async (req, res = response) => {
    const { id } = req.params;
    const product = await Product.findById(id);

    res.json(product);
}


// update Product
const updateProduct = async (req, res = response) => {
    const { id } = req.params;
    const data = req.body;

    if (data.name) {
        data.name = data.name.toUpperCase();
    }

    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    res.json(product);
}


// delete Product
const deleteProduct = async (req, res = response) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id, { new: true })

    res.json(deleteProduct);
}


module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};