import { useEffect, useState, useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import currency from 'currency.js';
import { CartContext } from "../context/CartContext";
import { Checkout } from "./checkout/Checkout";
import { CartOverview } from "./CartOverview";
import { CheckoutStatus } from "./checkout/CheckoutStatus";

export function Cart() {

    const [products, setProducts] = useState([]);

    const {cart} = useContext(CartContext);

    useEffect(() => {
        if(cart.products) setProducts(cart.products);
    }, [cart]);

    const getSubtotal = () => {
        if(products.length !== 0){
            let prices = products.map(product => (currency(product.price).value) * product.qty);
            let subTotal = prices.reduce((x, y) => {
                return x + y
            });
        return currency(subTotal).format();
        }
    };

    return(
        <div className="cart-container">
        <Routes>
            <Route path='/' element={<CartOverview products={products} subTotal={getSubtotal()} />} />
            <Route path='/checkout' element={<Checkout subTotal={getSubtotal()} />} />
            <Route path='/checkout-result' element={<CheckoutStatus />} />
        </Routes>                      
        </div>
    )
}

