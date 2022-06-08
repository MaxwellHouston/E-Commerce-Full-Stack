import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { PaymentErrorModal } from "../../../Modal/PaymentErrorModal";

export const PaymentForm = ({shippingAddress, saveState}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!shippingAddress.id){
            setErrorMessage('Please select a shipping address');
            setShowModal(true);
            return;
        }
        if(!stripe || !elements) return;
        setIsLoading(true);
        saveState();
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/account/cart/checkout/result'
            }
        });
        if(error) {
            setErrorMessage(error.message);
            setShowModal(true);
        };
        setIsLoading(false);
    };

    const closeModal = () => {
        setErrorMessage('');
        setShowModal(false);
    }

    return(
        <form className="payment-form" onSubmit={handleSubmit}>
            <PaymentErrorModal show={showModal} close={closeModal} modalMessage={errorMessage} />
            <PaymentElement />
            <button className="submit-btn" type='submit'>{isLoading ? 'Loading...' : 'Place Order'}</button>
        </form>
    )

}
