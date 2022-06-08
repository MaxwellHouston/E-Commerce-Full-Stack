import { Elements } from '@stripe/react-stripe-js';
import { useCallback, useEffect, useState } from 'react';
import { PaymentForm } from './PaymentForm';
import { OrderSummary } from '../../OrderSummary';
import apiOrders from '../../../../utilities/api/apiOrders';

export const Payment = ({subTotal, total, updateTotal, stripePromise, shippingAddress, saveState}) => {

    
    const [clientSecret, setClientSecret] = useState('');

    const loadSecret = useCallback( 
        async () => {
            if(!total) return;
            let secretResponse = await apiOrders.paymentIntent({total: total});
            if(secretResponse) setClientSecret(secretResponse);
        }, [total]
    );

    useEffect(() => {
        loadSecret();
    }, [loadSecret]);

    const options = {
        clientSecret: clientSecret,
        appearance: {
            theme: 'stripe'
        }
    };

    return(
        <div className="payment">
            <h2>Payment</h2>
            <OrderSummary subTotal={subTotal} updateTotal={updateTotal} />
            {clientSecret && (
                <Elements stripe={stripePromise} options={options} >
                    <PaymentForm shippingAddress={shippingAddress} saveState={saveState} />
                </Elements>
            )}
        </div>
    )
}