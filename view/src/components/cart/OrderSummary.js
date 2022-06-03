import currency from 'currency.js';
import { useCallback, useEffect, useState } from 'react';

export function OrderSummary({subTotal, updateTotal}) {

    const [salesTax, setSalesTax] = useState(0);
    const [displayTotal, setDisplayTotal] = useState(0);

    const calculateTax = useCallback( 
        () => {
            let sub = currency(subTotal).value;
            let tax = ((sub) * .065);
            setSalesTax(tax.toFixed(2));
            setDisplayTotal(sub + tax);
        },[subTotal]
    );

    useEffect(() => {
        calculateTax();
    }, [calculateTax]);

    useEffect(() => {
        if(updateTotal && displayTotal){
            let totalInCents = currency(displayTotal).value * 100;
            updateTotal(totalInCents);
        }
    },[updateTotal, displayTotal]);

    return(
        <div className='order-summary'>
            <p>Subtotal: {subTotal}</p>
            <p>Shipping & Handling: $0.00</p>
            <p>Sales Tax: {currency(salesTax).format()}</p>
            <p>Total: {currency(displayTotal).format()}</p>
        </div>
    )
}