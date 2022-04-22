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

//Get product by sport
productRouter.get('/:sport', async (req, res) => {
    let sport = req.params.sport;
    try {
        const products = await productInstance.getProductsBySport(sport);
        if(!products) return res.status(404).json({message: 'Invalid sport'});
        res.json(products);
    } catch(err) {
        res.status(400).json(err);
    }
});


//Get products by category
productRouter.get('/all/:category', async (req, res) => {
    let category = req.params.category;
    try {
        const products = await productInstance.getProductsByCategory(category);
        if(products.length === 0) return res.status(404).json({message: 'Invalid category'});
        res.json(products);
    } catch(err) {
        res.status(400).json(err);
    }
});

//Get products by sport & category
productRouter.get('/:sport/:category', async (req, res) => {
    let data = {
        sport: req.params.sport,
        category: req.params.category
    }
    try {
        const products = await productInstance.getProductsBySportAndCategory(data) ;
        if(products.length === 0) return res.status(400).json({message: 'Invalid category'});
        res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = productRouter;