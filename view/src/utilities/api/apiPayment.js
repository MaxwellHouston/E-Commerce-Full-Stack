import axios from 'axios';

const apiPayment = {

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
    }

}

export default apiPayment;