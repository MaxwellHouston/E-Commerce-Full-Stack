const { validate } = require('express-validation');
const { checkAuthentication } = require('../config/passportConfig');
const { validationError, validateAddress } = require('../functions_schemas/validateFunctions');
const { addressSchema } = require('../functions_schemas/validateSchemas');
const Usermodel = require('../models/UserModel');

const addressRouter = require('express').Router();

const userInstance = new Usermodel();

addressRouter.get('/', checkAuthentication, async (req, res) => {
    try {
        const addressList = await userInstance.getAddresses(req.user.id);
        if(addressList.length === 0) res.status(400).json({message: 'No addresses found'});
        res.json(addressList);
    } catch (err) {
        res.status(400).json(err);
    }
});

addressRouter.post('/', checkAuthentication, async (req, res) => {
    let data = req.body;
    data.user_id = req.user.id;
    try {
        const response = await userInstance.addAddress(data);
        res.json(response);
    } catch (err) {
        res.status(400).json(err);
    }
});

addressRouter.put('/:addressid', checkAuthentication, validate(addressSchema), async (req, res) => {
    let data = req.body;
    for(const key in data){
        try {
            let input = {column: key, value: data[key], id: req.params.addressid};
            await userInstance.updateAddress(input);
        } catch (err) {
            res.status(400).json(err);
        }
    }
    res.json({message: 'Update successful'});
});

addressRouter.post('/validate', validateAddress, async (req, res) => {
    if(req.verifiedAddress){
        let verifiedAddress = {
            street: req.verifiedAddress.Address2,
            city: req.verifiedAddress.City,
            state: req.verifiedAddress.State,
            zip: req.verifiedAddress.Zip5,
        };
        res.json(verifiedAddress);
    };
});

addressRouter.use(validationError);

module.exports = addressRouter; 