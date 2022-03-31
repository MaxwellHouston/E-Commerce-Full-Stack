//-------------------------------------------------Imports-----------------------------------------------------------------//
const productCartRouter = require('express').Router({mergeParams: true});
const { validate } = require('express-validation');
const { productInputSchema, productQtySchema } = require('../functions_schemas/productSchema');
const { validationError } = require('../functions_schemas/validateFunctions');
const CartModel = require('../models/CartModel');

//-------------------------------------------------Models-----------------------------------------------------------------//
const cartInstance = new CartModel();

//------------------------------------------Cart Product Routes---------------------------------------------------------//

//Add product to cart
productCartRouter.post('/', validate(productInputSchema), async (req, res) => {
    const data = {
        cart_id: req.cart.id,
        product_id: req.body.product_id,
        qty: req.body.qty
    };
     try {
         await cartInstance.addProduct(data);
         res.json({message: 'Product added'})
     } catch(err) {
        res.status(400).json(err);
     }
});

//Get products from cart
productCartRouter.get('/', async (req, res) => {
    try{
        const result = await cartInstance.getAllProducts(req.cart.id);
        if(result.length === 0) return res.status(400).json({message: 'Cart Empty'});
        res.json(result);
    } catch(err) {
        res.status(400).json(err);
    }
});

//Get product from cart by id
productCartRouter.get('/:id', async (req, res) => {
    const data = {cart_id: req.cart.id, product_id: req.params.id};
    try {
        const result = await cartInstance.getProductById(data);
        if(!result) return res.status(400).json({message: 'Product not found'});
        res.json(result);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Update qty in cart
productCartRouter.put('/:id', validate(productQtySchema), async (req, res) => {
    const data = {qty: req.body.qty, cart_id: req.cart.id, product_id: req.params.id};
    try {
        const result = await cartInstance.updateProductQty(data);
        if(result.rowCount === 0) return res.status(400).json({message: 'Product not found'});
        res.json({message: 'Qty updated'});
    } catch (err) {
        res.status(400).json(err);
    }
})


//Delete product in cart
productCartRouter.delete('/:id', async (req, res) => {
    const data = {cart_id: req.cart.id, product_id: req.params.id};
    try {
        await cartInstance.deleteProductById(data);
        res.status(204).send();
    } catch (err) {
        res.status(400).json(err);
    }
})

//------------------------------------------Catch Validation Errors---------------------------------------------------------//

productCartRouter.use(validationError)

module.exports = productCartRouter;