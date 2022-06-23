import axios from "axios";

const apiAddress = {
    
    fetchAddresses: async () => {
        try {
            const res = await axios({
                method: 'get',
                withCredentials: true,
                url: '/api/user/address'
            })
            return res.data;
        } catch (err) {
            return err.response;
        }
    },

    createAddress: async (data) => {
        try {
            const res = await axios({
                method: 'post',
                data,
                withCredentials: true,
                url: '/api/user/address'
            })
            return res.data;
        } catch (err) {
            return err.response;
        }
    },

    updateAddress: async (data, addressId) => {
        try {
            const res = await axios({
                method: 'put',
                data,
                withCredentials: true,
                url: `/api/user/address/${addressId}`
            })
            return res.data;
        } catch (err) {
            return err.response;
        }
    },

    deleteAddress: async (addressId) => {
        try {
            const res = await axios({
                method: 'delete',
                withCredentials: true,
                url: `/api/user/address/${addressId}`
            })
            return res.data;
        } catch (err) {
            return err.response;
        }
    },

    validateAddress: async (address) => {
        try{
            const res = await axios({
                method: 'post',
                data: address,
                withCredentials: true,
                url: '/api/user/address/validate'
            });
            return res.data;
        } catch (err) {
            return err.response;
        }
    }
}

export default apiAddress;