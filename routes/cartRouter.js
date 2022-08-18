//-------------------------------------------------Imports-----------------------------------------------------------------//
const cartRouter = require('express').Router();
const Cartmodel = require('../models/CartModel');
const productCartRouter = require('./productCartRouter');
const { checkAuthentication } = require('../config/passportConfig');

//-------------------------------------------------Models-----------------------------------------------------------------//
const cartInstance = new Cartmodel();

//------------------------------------------Cart_id check---------------------------------------------------------//
cartRouter.use('/:id', checkAuthentication, async (req, res, next) => {
    try{
        const cart = await cartInstance.getCartById(req.params.id);
        if(!cart) return res.status(400).json({message: 'No cart found'});
        if(cart.user_id !== req.user.id) return res.status(400).json({message: 'No cart found'});
        req.cart = cart;
        next();
    } catch(err) {
        res.status(400).json(err);
    }
})

//------------------------------------------Cart Product Router---------------------------------------------------------//

cartRouter.use('/:id/items', productCartRouter);

//------------------------------------------Cart Routes---------------------------------------------------------//

// Get all carts for user_id
cartRouter.get('/', checkAuthentication, async (req, res) => {
    try {
        const userCarts = await cartInstance.getCartsByUserId(req.user.id);
        res.json(userCarts);
    } catch(err) {
        res.status(400).json(err);
    }
});

//Create new cart
cartRouter.post('/', checkAuthentication, async (req, res) => {
    try{
        const newCart = await cartInstance.create(req.user.id);
        if(!newCart) return res.status(400).json({message: 'Invalid user_id'});
        res.status(201).json(newCart);
    } catch(err) {
        res.status(400).json(err);
    }
});

// Get cart by cart id
cartRouter.get('/:id', (req, res) => {
    res.json(req.cart);
});


//Delete cart
cartRouter.delete('/:id', async (req, res) => {
    try{
        await cartInstance.deleteCart(req.cart.id);
        res.status(204).send();
    } catch(err) {
        res.status(400).json(err)
    }
})

//Checkout
cartRouter.get('/:id/checkout', async (req, res) => {
    try {
        const result = await cartInstance.checkout({user_id: req.user.id, cart_id: req.cart.id});
        if(result === 'empty') return res.status(400).json({message: 'Cart empty. No order created'});
        res.json({"order_id": result});
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = cartRouter;