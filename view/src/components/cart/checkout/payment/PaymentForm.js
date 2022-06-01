import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";


export const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) return;

        const { error } = await stripe.processOrder({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/checkout-success'
            }
        })
    }

    return(
        <form className="payment-form" onSubmit={handleSubmit}>
            <PaymentElement />
            <button className="submit-btn">Place Order</button>
        </form>
    )

}