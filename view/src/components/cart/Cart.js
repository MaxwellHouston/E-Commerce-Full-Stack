import { useEffect, useState, useContext } from "react";
import { CartProductView } from "./CartProductView";
import { OrderSummary } from "./OrderSummary";
import { LoadingWheel } from '../animated/LoadingWheel';
import currency from 'currency.js';
import { CartContext } from "../context/CartContext";

export function Cart() {

    const [products, setProducts] = useState([]);

    const {cart} = useContext(CartContext);

    useEffect(() => {
        if(cart.products) setProducts(cart.products);
    }, [cart]);

    const renderProducts = () => {
        if(products){
            if(products.length === 0) return (<li className="empty-cart">Cart Empty</li>);
            let productArray = products.map(product => <CartProductView key={product.id} product={product} />)
            return productArray;
        } else {
            return (
                <li className="loading-cart">
                    <LoadingWheel />
                </li>
            )
        }
    };

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
            <ul className="cart-items-list">
                {renderProducts()}
            </ul>
            <OrderSummary subTotal={getSubtotal()} />           
        </div>
    )
}

