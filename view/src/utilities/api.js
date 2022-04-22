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
};

export default api;