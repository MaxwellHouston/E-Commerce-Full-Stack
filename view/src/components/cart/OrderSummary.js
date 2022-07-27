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
            <p>Subtotal: <span>{subTotal}</span></p>
            <p>Shipping & Handling: <span>$0.00</span></p>
            <p>Sales Tax: <span>{currency(salesTax).format()}</span></p>
            <p>Total: <span>{currency(displayTotal).format()}</span></p>
        </div>
    )
}