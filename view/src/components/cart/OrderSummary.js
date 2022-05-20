import currency from 'currency.js';
import { useCallback, useEffect, useState } from 'react';

export function OrderSummary({subTotal}) {

    const [salesTax, setSalesTax] = useState(0);
    const [total, setTotal] = useState(0);

    const calculateTax = useCallback( 
        () => {
            let sub = currency(subTotal).value;
            let tax = ((sub) * .065);
            setSalesTax(tax.toFixed(2));
            setTotal(sub + tax);
        },[subTotal]
    );

    useEffect(() => {
        calculateTax();
    }, [calculateTax])

    return(
        <div className="order-summary">
            <h1>Order Summary</h1>
            <p>Subtotal: {subTotal}</p>
            <p>Shipping & Handling: $0.00</p>
            <p>Sales Tax: {currency(salesTax).format()}</p>
            <p>Total: {currency(total).format()}</p>
            <button className='submit-btn'>Check Out</button>
        </div>
    )
}