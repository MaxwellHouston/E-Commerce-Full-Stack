import axios from 'axios';

const apiOrders = {

    paymentIntent: async (total) => {
        try {
            const createIntent = await axios({
                method: 'post',
                data: total,
                withCredentials: true,
                url: '/api/payment/payment-intent'
            });
            return createIntent.data.clientSecret;     
        } catch (err) {
            return err.response
        }
    },

    submitOrder: async (cartId) => {
        try {
            const newOrder = await axios({
                method: 'get',
                withCredentials: true,
                url: `/api/carts/${cartId}/checkout`
            });
            return newOrder.data;
        } catch (err) {
            return err.response;
        }
    },

    getOrderById: async (orderId) => {
        try {
            const order = await axios({
                method: 'get',
                withCredentials: true,
                url: `/api/orders/${orderId}`
            });
            return order.data;
        } catch (err) {
            return err.response;
        }
    },

    getUserOrders: async () => {
        try {
            const ordersArray = await axios({
                method: 'get',
                withCredentials: true,
                url: `/api/orders`
            });
            return ordersArray.data;
        } catch (err) {
            
        }
    }

}

export default apiOrders;