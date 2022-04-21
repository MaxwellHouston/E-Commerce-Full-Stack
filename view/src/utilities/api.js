import axios from 'axios';

export const api = {

    fetchCategories: async () => {
        axios({
            method: 'get',
            withCredentials: 'true',
            url: '/api/products/'
        })
    },
}