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
        const text = `SELECT * FROM product WHERE category = $1;`;;
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack;
        }
    };

    async getProductsBySport(data) {
        const text = `SELECT * FROM product WHERE sport = $1;`;
        const inputs = [data];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack
        }
    };

    async getProductsBySportAndCategory({sport, category}) {
        const text = `SELECT * FROM product WHERE sport = $1 AND category = $2;`;
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

    async getProductsByNameColor({name, color}) {
        const text = 'SELECT size, id FROM product WHERE name=$1 AND color=$2';
        const inputs = [name, color];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack
        }
    };

    async getProductsByNameSize({name, size}) {
        const text = 'SELECT color, id FROM product WHERE name=$1 AND size=$2';
        const inputs = [name, size];
        try{
            const result = await query(text, inputs);
            return result.rows;
        } catch(err) {
            throw err.stack
        }
    };

    async getProductsBySearch({name, color, size}){
        const text = `SELECT * FROM product WHERE (LOWER(name) LIKE $1 OR LOWER(sport) LIKE $1) AND color LIKE $2 AND size LIKE $3;`;
        const inputs = [`%${name}%`, `%${color}`, `%${size}`];
        try {
            const result = await query(text, inputs);
            return result.rows;
        } catch (err) {
            throw err.stack;
        }
    }
}