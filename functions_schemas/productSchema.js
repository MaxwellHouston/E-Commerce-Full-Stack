const { Joi } = require('express-validation');

module.exports = {
    productInputSchema: {
        body: Joi.object({
            product_id: Joi.string().max(6).required(),
            qty: Joi.number().required().min(1)
        })
    },

    productQtySchema: {
        body: Joi.object({
            qty: Joi.number().required().min(1)
        })
    }


}