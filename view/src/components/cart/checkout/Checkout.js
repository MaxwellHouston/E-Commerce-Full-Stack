import { useCallback, useState } from "react";
import { Payment } from "./payment/Payment";
import { Shipping } from "./shipping/Shipping";


export const Checkout = ({subTotal}) => {

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

    return (
        <div className="checkout-page">
            <Shipping updateAddressByInput={updateAddressByInput} updateAddressByObject={updateAddressByObject} address={shippingAddress} />
            <Payment total={total} subTotal={subTotal} updateTotal={updateTotal} />
        </div>
    )
};  