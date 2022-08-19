const { query } = require('../DB/db');


module.exports = class Ordermodel {

    async create(user_id, total_price) {
        const text = 'INSERT INTO orders (user_id, status, total_price, created) VALUES ($1, $2, $3, current_timestamp) RETURNING id;';
        const inputs = [user_id, 'PENDING', total_price];
        try {
            return await query(text, inputs);
        } catch (err) {
            throw err.stack;
        }
    };

    async addProduct(data) {
        const text = 'INSERT INTO order_product (order_id, product_id, price, qty) VALUES ($1, $2, $3, $4);';
        const inputs = [data.order_id, data.product_id, data.price, data.qty];
        try {
            return await query(text, inputs);
        } catch (err) {
            throw err.stack;
        }
    };

    async getOrderProducts(data) {
        const text = 'SELECT product.*, qty FROM product JOIN order_product ON id = product_id WHERE order_id = $1';
        const inputs = [data];
        try {
            const products = await query(text, inputs);
            return products.rows;
        } catch (err) {
            throw err.stack;
        }
    };

    async getAllOrders(data) {
        const text = 'SELECT * FROM orders WHERE user_id = $1';
        const inputs = [data];
        try {
            const orders = await query(text, inputs);
            return orders.rows;
        } catch (err) {
            throw err.stack;
        }
    };

    async getOrderById(data) {
        const text = 'SELECT * FROM orders WHERE id = $1';
        const inputs = [data];
        try {
            const products = await this.getOrderProducts(data);
            const order = await query(text, inputs);
            if(!order.rows[0]) return order.rows[0];
            order.rows[0].products = products;
            return order.rows[0];
        } catch (err) {
            throw err.stack;
        }
    };

}