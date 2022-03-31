const bcrypt = require("bcryptjs");
const { ValidationError } = require('express-validation');

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
        
    }
            
}
