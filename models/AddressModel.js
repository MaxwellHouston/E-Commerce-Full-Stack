const { query } = require('../DB/db');
const format = require('pg-format');

module.exports = class AddressModel {

    async addAddress(data) {
        let text = 'INSERT INTO address (user_id, street, city, state, zip, comments) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;';
        let inputs = [data.user_id, data.street, data.city, data.state, data.zip, data.comments];
        try {
            const newAddress = await query(text, inputs);
            return newAddress.rows[0];
        } catch (err) {
            throw err.stack;
        }
    };

    async getAddresses(data) {
        let text = 'SELECT * FROM address WHERE user_id = $1 ORDER BY id;'
        let inputs = [data];
        try {
            const result = await query(text, inputs);
            return result.rows;
        } catch (err) {
            throw err.stack;
        }
    };

    async getAddressById(addressId) {
        let text = 'SELECT * FROM address WHERE id = $1;'
        let inputs = [addressId];
        try {
            const result = await query(text, inputs);
            return result.rows[0];
        } catch (err) {
            throw err.stack;
        }
    };

    async updateAddress(data) {
        let text = format('UPDATE address SET %I = $1 WHERE id = $2;', data.column);
        let inputs = [data.value, data.id];
        try {
            return await query(text, inputs);
        } catch (err) {
            throw err.stack;
        }
    };

    async deleteAddress(addressId) {
        let text = 'DELETE FROM address WHERE id = $1;'
        let inputs = [addressId];
        try {
            return await query(text, inputs);
        } catch (err) {
            throw err.stack;
        }
    };

}