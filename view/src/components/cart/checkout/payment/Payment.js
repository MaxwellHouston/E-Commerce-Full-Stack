import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useEffect, useState } from 'react';
import apiPayment from '../../../../utilities/api/apiPayment';
import { PaymentForm } from './PaymentForm';
import { OrderSummary } from '../../OrderSummary';

const stripePromise = loadStripe('pk_test_51L5WeeITjfAKbWHqglZGdbyKmaSBnG3wOIT4eP5gxKOuGCZx33taIoP6ymu7lOb7AFH7xUpiL5eTYblygO4hVU0p001NcHjned');

export const Payment = ({subTotal}) => {

    const [clientSecret, setClientSecret] = useState('');

    const loadSecret = useCallback( 
        async () => {
            let secretResponse = await apiPayment.paymentIntent({total: 5000});
            if(secretResponse) setClientSecret(secretResponse);
        }, []
    );

    useEffect(() => {
        loadSecret();
    }, [loadSecret]);

    const options = {
        clientSecret: clientSecret,
        appearance: {
            theme: 'stripe'
        }
    }

    return(
        <div className="payment">
            <h2>Payment</h2>
            <OrderSummary subTotal={subTotal} />
            {clientSecret && (
                <Elements stripe={stripePromise} options={options} >
                    <PaymentForm />
                </Elements>
            )}
        </div>
    )
}