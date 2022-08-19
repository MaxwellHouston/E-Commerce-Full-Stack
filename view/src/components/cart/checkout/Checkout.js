import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CheckoutStatus } from "./CheckoutStatus";
import { CheckoutForms } from "./CheckoutForms";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51L5WeeITjfAKbWHqglZGdbyKmaSBnG3wOIT4eP5gxKOuGCZx33taIoP6ymu7lOb7AFH7xUpiL5eTYblygO4hVU0p001NcHjned');

export const Checkout = ({subTotal, cartId}) => {

    const [shippingAddress, setShippingAddress] = useState({street: '', city: '', state: '', zip: '', comments: ''});
    const [total, setTotal] = useState('');

    const updateAddressByInput = (input, value) => {
        setShippingAddress((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const updateAddressByObject = (newAddress) => {
        if(!newAddress.comments) {
            newAddress.comments = '';
        }
        setShippingAddress(newAddress);
    };

    const updateTotal = useCallback(
         (newTotal) => {
            setTotal(newTotal);
        }, []
    );
    
    const saveState = () => {
        window.localStorage.setItem('ORDER_SHIPPING_ADDRESS', JSON.stringify(shippingAddress));
        window.localStorage.setItem('ORDER_TOTAL', JSON.stringify(total));
    }

    return (
        <div className="checkout-page">
            <Routes>
                <Route path='/*' element={
                    <CheckoutForms 
                        updateAddressByInput={updateAddressByInput}
                        updateAddressByObject={updateAddressByObject} 
                        shippingAddress={shippingAddress} 
                        total={total} 
                        subTotal={subTotal} 
                        updateTotal={updateTotal}
                        stripePromise={stripePromise}
                        saveState={saveState} 
                    />} 
                />
                <Route path='/result' element={        
                <Elements stripe={stripePromise}>
                    <CheckoutStatus cartId={cartId} />
                </Elements>} />
            </Routes>
        </div>
    )
};  