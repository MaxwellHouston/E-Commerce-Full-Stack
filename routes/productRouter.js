//------------------------------------------Imports---------------------------------------------------------//
const Productmodel = require('../models/ProductModel');
const productRouter = require('express').Router();

//------------------------------------------Models---------------------------------------------------------//
const productInstance = new Productmodel();

//------------------------------------------Product Routes---------------------------------------------------------//

//Get all products
productRouter.get('/', async (req, res) => {
    try{
        const productList = await productInstance.getAllProducts();
        res.json(productList); 
    } catch(err){
        res.status(400).json(err);
    }
});

//Get Sports
productRouter.get('/sports-list', async (req, res) => {
    try {
        const sports = await productInstance.getSports();
        res.json(sports);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get product by id
productRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await productInstance.getProductById(id);
        if(!product) return res.status(404).json({message: 'Invalid product number'});
        res.json(product);
    } catch(err) {
        res.status(400).json(err);
    }
});


//Get products by category
productRouter.get('/categories/:category', async (req, res) => {
    let category = req.params.category;
    try {
        const productList = await productInstance.getProductsByCategory(category);
        if(productList.length === 0) return res.status(404).json({message: 'Invalid category'});
        res.json(productList);
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = productRouter;