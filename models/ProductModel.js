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
        const text = `SELECT sub.* FROM (SELECT * FROM product WHERE id LIKE '%33' OR id LIKE '%44') AS sub WHERE category = $1;`;;
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack;
        }
    };

    async getProductsBySport(data) {
        const text = `SELECT sub.* FROM (SELECT * FROM product WHERE id LIKE '%33' OR id LIKE '%44') AS sub WHERE sport = $1;`;
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack
        }
    };

    async getProductsBySportAndCategory({sport, category}) {
        const text = `SELECT sub.* FROM (SELECT * FROM product WHERE id LIKE '%33' OR id LIKE '%44') AS sub WHERE sport = $1 AND category = $2;`;
        const inputs = [sport, category];
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
    };
}