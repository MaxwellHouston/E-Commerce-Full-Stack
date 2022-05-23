import { useEffect, useState, useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { OrderSummary } from "./OrderSummary";
import currency from 'currency.js';
import { CartContext } from "../context/CartContext";
import { CartProductList } from "./CartProductList";
import { Checkout } from "./checkout/Checkout";

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
            <Route path='/' element={<CartProductList products={products} />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>           
        <OrderSummary subTotal={getSubtotal()} />           
        </div>
    )
}

