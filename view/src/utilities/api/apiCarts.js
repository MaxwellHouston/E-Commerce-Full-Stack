import axios from "axios";

const apiCarts = {

    fetchActiveCart: async () => {
        try{
            const carts = await axios({
                method: 'get',
                withCredentials: true,
                url: '/api/carts'
            });
            const activeCart = await carts.data.slice(-1)[0];
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
            const res = await axios({
                method: 'post',
                withCredentials: true,
                url: '/api/carts'
            });
            return res.data;
        } catch(err) {
            return err.response;
        }
    },

    addItemToCart: async (data) => {
        try{
            const cart = await apiCarts.fetchActiveCart();
            const res = await axios({
                method: 'post',
                data,
                withCredentials: true,
                url: `/api/carts/${cart.id}/items`
            });
            return res.data;
        } catch(err) {
            return err.response;
        }
    }


}

export default apiCarts;