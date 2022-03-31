//-------------------------------------------------Imports-----------------------------------------------------------------//
const orderRouter = require('express').Router();
const Ordermodel = require('../models/OrderModel');
const { checkAuthentication } = require('../passportConfig');

//-------------------------------------------------Models-----------------------------------------------------------------//
const orderInstance = new Ordermodel();

//-------------------------------------------------Order Middleware-----------------------------------------------------------------//

//Check order id
orderRouter.use('/:id', checkAuthentication, async (req, res, next) => {
    try{
        const order = await orderInstance.getOrderById(req.params.id);
        if(!order) return res.status(400).json({message: 'No order found'});
        if(order.user_id !== req.user.id) return res.status(400).json({message: 'No order found'});
        req.order = order;
        next();
    } catch(err) {
        res.status(400).json(err);
    }
});

//-------------------------------------------------Order Routes-----------------------------------------------------------------//

//Get all orders
orderRouter.get('/', checkAuthentication, async (req, res) => {
    try {
        const result = await orderInstance.getAllOrders(req.user.id);
        if(result.length === 0) return res.status(400).json('No orders found');
        res.json(result);
    } catch (err) {
        res.status(400).json(err);
    }
})

//Get order by id
orderRouter.get('/:id', async (req, res) => {
    res.json(req.order);
});


module.exports = orderRouter;