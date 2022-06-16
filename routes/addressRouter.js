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
        res.json(addressList);
    } catch (err) {
        res.status(400).json(err);
    }
});

addressRouter.post('/', checkAuthentication, validate(addressSchema), async (req, res) => {
    let data = req.body;
    data.user_id = req.user.id;
    try {
        let newAddress = await userInstance.addAddress(data);
        res.json(newAddress);
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
    };
    let updatedAddress = await userInstance.getAddressById(req.params.addressid);
    res.json(updatedAddress);
});

addressRouter.post('/validate', validateAddress, async (req, res) => {
    if(req.verifiedAddress){
        let verifiedAddress = {
            street: req.verifiedAddress.Address2[0],
            city: req.verifiedAddress.City[0],
            state: req.verifiedAddress.State[0],
            zip: req.verifiedAddress.Zip5[0],
        };
        res.json(verifiedAddress);
    }
});

addressRouter.use(validationError);

module.exports = addressRouter; 