import axios from 'axios';

const api = {

    fetchSports: async () => {
        const res = await axios({
            method: 'get',
            withCredentials: true,
            url: '/api/products/sports-list'
        });
        return res.data.map(sport => sport.sport);
    },

    fetchAllProducts: async () => {
        const allProducts = await axios({
            method: 'get',
            withCredentials: true,
            url: '/api/products'
        });
        return allProducts.data;
    },

    fetchProductsBySport: async (sport) => {
        const sportProducts = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/${sport}`
        });
        return sportProducts.data;
    },

    fetchProductsByCategory: async (category) => {
        const categoryProducts = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/all/${category}`
        });
        return categoryProducts.data;
    },

    fetchProductsBySportAndCategory: async (sport, category) => {
        const sportCategoryProducts = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/${sport}/${category}`
        });
        return sportCategoryProducts.data;
    }
};

export default api;