const { Joi } = require('express-validation');

module.exports = {

    registerSchema: {
        body: Joi.object({
            first_name: Joi.string().trim().alphanum().required(),
            last_name: Joi.string().trim().alphanum().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    },
    loginSchema: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    },
    updateSchema: {
        body: Joi.object({
            first_name: Joi.string().trim().alphanum(),
            last_name: Joi.string().trim().alphanum(),
            email: Joi.string().email(),
            password: Joi.string().min(6)
        })
    },
    addressSchema: {
        body: Joi.object({
            street: Joi.string().trim(),
            city: Joi.string().trim().alphanum(),
            state: Joi.string().trim().alphanum(),
            zip: Joi.string().trim().length(5),
            comments: Joi.string().trim().max(250)
        })
    }
};