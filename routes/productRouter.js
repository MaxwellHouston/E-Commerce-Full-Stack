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

//Get product by ID
productRouter.get('/id/:id', async (req, res) => {

    let id = req.params.id;

    try {
        const product = await productInstance.getProductById(id);
        if(!product) return res.status(404).send('Invalid product number');
        res.json(product);
    } catch(err) {
        res.status(400).send(err);
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

//Get products by search params
productRouter.get('/search/:name-:color-:size', async (req, res) => {
    let data = {
        name: req.params.name === 'null' ? '' : req.params.name,
        color: req.params.color === 'null' ? '' : req.params.color,
        size: req.params.size === 'null' ? '' : req.params.size
    }
    try {
        const products = await productInstance.getProductsBySearch(data);
        res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get product by sport
productRouter.get('/:sport', async (req, res) => {
    let sport = req.params.sport;
    try {
        const products = await productInstance.getProductsBySport(sport);
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
        res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get products by name & size
productRouter.get('/name/:name/size/:size', async (req, res) => {
    let data = {
        name: req.params.name,
        size: req.params.size
    }
    try {
        const products = await productInstance.getProductsByNameSize(data);
        if(products.length === 0) return res.status(404).json({message: 'Invalid name/size'});
        res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Get products by name & color
productRouter.get('/name/:name/color/:color', async (req, res) => {
    let data = {
        name: req.params.name,
        color: req.params.color
    }
    try {
        const products = await productInstance.getProductsByNameColor(data);
        if(products.length === 0) return res.status(404).json({message: 'Invalid name/color'});
        res.json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = productRouter;