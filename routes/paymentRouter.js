const paymentRouter = require('express').Router();
const stripe = require('stripe')('sk_test_51L5WeeITjfAKbWHqM6vcZfVvhu5BMlUR6D2ofHy7zsThflTZOW1dlU329ohh7ihODglAt03GRR0VgM3UuXq0djWM00YDjfgDy2');

paymentRouter.post('/payment-intent', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.total,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
              }
        });
        res.json({
            clientSecret: paymentIntent.client_secret
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = paymentRouter;