import axios from 'axios';

const apiProducts = {

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
    },

    fetchProductById: async (id) => {
        const product = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/id/${id}`
        });
        return product.data;
    },

    fetchProductByNameSize: async (name, size) => {
        const products = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/name/${name}/size/${size}`
        });
        return products.data;
    },

    fetchProductByNameColor: async (name, color) => {
        const products = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/name/${name}/color/${color}`
        });
        return products.data;
    },

    fetchProductBySearch: async ({name, color, size}) => {
        const products = await axios({
            method: 'get',
            withCredentials: true,
            url: `/api/products/search/${name}-${color}-${size}`
        });
        return products.data;
    }
};

export default apiProducts;