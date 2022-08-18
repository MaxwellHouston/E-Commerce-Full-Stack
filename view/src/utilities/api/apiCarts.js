import axios from "axios";

const apiCarts = {

    fetchActiveCart: async () => {
        try{
            const carts = await axios({
                method: 'get',
                withCredentials: true,
                url: '/api/carts'
            });
            console.log(carts)
            let activeCart = await carts.data.slice(-1)[0];
            console.log(activeCart)
            const cart = await axios({
                method: 'get',
                withCredentials: true,
                url: `/api/carts/${activeCart.id}`
            });
            return cart.data;     
        } catch(err) {
            return err.response;
        }
    },

    create: async () => {
        try{
            const newCart = await axios({
                method: 'post',
                withCredentials: true,
                url: '/api/carts'
            });
            return newCart.data;
        } catch(err) {
            return err.response;
        }
    },

    addItemToCart: async (data, cartId) => {
        try{
            const res = await axios({
                method: 'post',
                data,
                withCredentials: true,
                url: `/api/carts/${cartId}/items`
            });
            return res.data;
        } catch(err) {
            return err.response;
        }
    },

    updateItemQty: async (productId, qty, cartId) => {
        try {
            const res = await axios({
                method: 'put',
                data: {qty: qty},
                withCredentials: true,
                url: `/api/carts/${cartId}/items/${productId}`
            });
            return res.data
        } catch (err) {
            return err.response;
        }
    },

    removeItem: async (productId, cartId) => {
        try {
            const res = await axios({
                method: 'delete',
                withCredentials: true,
                url: `/api/carts/${cartId}/items/${productId}`
            });
            return res.status;
        } catch(err) {
            return err.response;
        }
    },

    fetchNumItems: async () => {
        try{
            const cart = await apiCarts.fetchActiveCart();
            const res = await axios({
                method: 'get',
                withCredentials: true,
                url: `/api/carts/${cart.id}/items`
            });
            return res.data.length;
        } catch(err) {
            return err.response;
        }
    },

    deleteCart: async (cartId) => {
        try {
            const res = await axios({
                method: 'delete',
                withCredentials: true,
                url: `/api/carts/${cartId}`
            });
            console.log(res.data);
            return res.data;
        } catch (err) {
            return err.response;
        }
    }

}

export default apiCarts;