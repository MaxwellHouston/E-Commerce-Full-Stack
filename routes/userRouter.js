//-------------------------------------------------Imports-----------------------------------------------------------------//
const userRouter = require('express').Router();
const { validate } = require('express-validation');
const UserModel = require('../models/UserModel');
const { updateSchema } = require('../functions_schemas/validateSchemas');
const { hashPassword, validationError } = require('../functions_schemas/validateFunctions');
const { checkAuthentication } = require('../config/passportConfig');
const addressRouter = require('./addressRouter');

//-------------------------------------------------Models-----------------------------------------------------------------//

const userInstance = new UserModel();

//-------------------------------------------------Address Router-----------------------------------------------------------------//

userRouter.use('/address', addressRouter);

//-------------------------------------------------Routes-----------------------------------------------------------------//

userRouter.get('/', checkAuthentication, async (req, res) => {
    try {
        res.json(req.user);
    } catch(err) {
        res.status(400).json(err);
    }
});

userRouter.put('/', checkAuthentication, validate(updateSchema), async (req, res) => {
    const data = req.body;
    for(const key in data){
        try{
            let input = {column: key, value: data[key], email: req.user.email};
            if(key === 'password'){
                let hashedPassword = await hashPassword(input.value);
                input.value = hashedPassword;
            }
            await userInstance.updateByEmail(input);
        } catch(err) {
            res.status(400).json(err);
        }
    };
    res.json({message: 'Update successful', status: 200});
});

userRouter.delete('/', checkAuthentication, async (req, res) => {
    try {
        await userInstance.deleteByEmail(req.user.email);
        req.logOut();
        res.status(204).send();
    } catch(err) {
        res.status(400).json(err)
    }
});

//-------------------------------------------------Catch Validation Errors-----------------------------------------------------------------//
userRouter.use(validationError);

module.exports = userRouter;
