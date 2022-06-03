import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import { useCallback, useEffect, useState } from "react";

const stripePromise = loadStripe('pk_test_51L5WeeITjfAKbWHqglZGdbyKmaSBnG3wOIT4eP5gxKOuGCZx33taIoP6ymu7lOb7AFH7xUpiL5eTYblygO4hVU0p001NcHjned');

export const CheckoutStatus = () => {
    return (
        <Elements stripe={stripePromise}>
            <StatusComponent />
        </Elements>
    )
}

const StatusComponent = () => {
    const [message, setMessage] = useState('');
    const stripe = useStripe();

    const loadStatus = useCallback( 
        async () => {
            if(!stripe) return;
            const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
            let { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
            console.log(paymentIntent);
        }, [stripe]
    );

    useEffect(() => {
        loadStatus()
    }, [loadStatus]);

    return(
        <div className="order-confirmation">
            bleh
        </div>
    )
}