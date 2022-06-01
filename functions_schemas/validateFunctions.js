const bcrypt = require("bcryptjs");
const { ValidationError } = require('express-validation');
const { USPSID } = require("../config/config");
const axios = require('axios');
const parseString = require('xml2js').parseString;


module.exports = {

    validationError(err, req, res, next) {
        if(err instanceof ValidationError) return res.status(err.statusCode).json(err);
        next();
    },

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
        },

    async validateCard(data) {
        
    },

    async validateAddress(req, res, next) {
        let data = req.body;
        let body = `<AddressValidateRequest USERID="${USPSID}"><Revision>1</Revision><Address><Address1/><Address2>${data.street}</Address2><City>${data.city}</City><State>${data.state}</State><Zip5>${data.zip}</Zip5><Zip4/></Address></AddressValidateRequest>`;
        try{
            const validationResult = await axios({
                method: 'post',
                headers: {'Content-Type': 'text/xml'},
                url: `https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=${body}`
            });
            parseString(validationResult.data, (err, result) => {
                if(result.AddressValidateResponse.Address[0].Error){
                    res.json({message: 'Invalid address'});
                } else {
                    let confirm = result.AddressValidateResponse.Address[0].DPVConfirmation[0];
                    if(confirm === 'Y'){
                        let verifiedAddress = result.AddressValidateResponse.Address[0];
                        req.verifiedAddress = verifiedAddress;
                    } else {
                        res.json({message: 'Invalid address'});
                    }
                }
            });
            next();
        } catch(err) {
            console.log(err);
            res.json({message: 'Invalid address'})
        }

    }
            
}
