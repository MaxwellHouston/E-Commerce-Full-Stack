import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useCallback, useEffect, useState } from "react";


export const PaymentVerification = () => {

    const [message, setMessage] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const verifyPayment = useCallback( async () => {
       /* if(!stripe || !elements) return; */

        console.log('test')

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/account/cart/checkout/result'
            }
        });
        if(error) {
            setMessage(error.message);
        };
    }, [elements, stripe])

    useEffect(() => {
        verifyPayment()
    }, [verifyPayment])

    return (
        <div>
            {message} bleh bleh bleh/
        </div>
    )
}