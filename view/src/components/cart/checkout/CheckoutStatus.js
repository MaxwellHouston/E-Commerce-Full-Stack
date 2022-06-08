import { useStripe } from "@stripe/react-stripe-js";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../context/AddressContext";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

export const CheckoutStatus = () => {
    const [message, setMessage] = useState('');

    const {load} = useContext(UserContext);
    const {loadCart} = useContext(CartContext);
    const {loadAddresses} = useContext(AddressContext);

    const stripe = useStripe();
    const navigate = useNavigate();

    useEffect(() => {
        load();
        loadCart();
        loadAddresses();
    },[load, loadCart, loadAddresses]);

    const loadStatus = useCallback( 
        async () => {
            if(!stripe) return;
            const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
            let { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
            switch (paymentIntent.status) {
                case "succeeded":
                navigate('/account/orders/order-confirmation');
                  setMessage('Success');
                  break;
                case "processing":
                  setMessage("Your payment is processing.");
                  break;
                case "requires_payment_method":
                  setMessage("Your payment was not successful, please try again.");
                  break;
                default:
                  setMessage("Something went wrong.");
                  break;
              }
        }, [stripe, navigate]
    );

    useEffect(() => {
        loadStatus()
    }, [loadStatus]);


    const backBtn = () => {
        navigate(-1);
    }

    return(
        <div className="order-confirmation">
            <h1>{message}</h1>
            <button onClick={backBtn}>Back</button>
        </div>
    )
}