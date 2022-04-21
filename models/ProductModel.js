const { query } = require('../DB/db');

module.exports = class Productmodel {

    async getAllProducts() {
        const text = 'SELECT * FROM product';
        const inputs = [];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err){
            throw err.stack;
        }
    };

    async getProductById(data) {
        const text = 'SELECT * FROM product WHERE id = $1';
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows[0];
        } catch(err) {
            throw err.stack;
        }
    };

    async getProductsByCategory(data) {
        const text = 'SELECT * FROM product WHERE category = $1;';
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack;
        }
    };

    async getProductsBySport(data) {
        const text = 'SELECT * FROM product WHERE sport = $1;';
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack
        }
    };

    async getSports() {
        const text = 'SELECT DISTINCT sport FROM product;';
        const inputs = [];
        try {
            const result = await query(text, inputs);
            return result.rows;
        } catch (err) {
            throw err.stack
        }
    }
}