import axios from "axios";

const apiAccount = {

    register: async (data) => {
        try{
            const res = await axios({
                method: 'post',
                data,
                withCredentials: true,
                url: '/api/register'
            });
            return res;
        } catch(err) {
            return err.response
        }
    },

    login: async (data) => {
        try{
            const res = await axios({
                method: 'post',
                data,
                withCredentials: true,
                url: '/api/login'
            });
            return res;
        } catch(err) {
            return err.response
        }
    }
}

export default apiAccount;