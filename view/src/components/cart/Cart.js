import { useEffect, useState, useCallback } from "react";
import apiCarts from "../../utilities/api/apiCarts"
import { CartProductView } from "./CartProductView";
import { OrderSummary } from "./OrderSummary";
import currency from 'currency.js';

export function Cart() {

    const [cart, setCart] = useState({});
    const [products, setProducts] = useState([]);

    const cartCheck = useCallback (async () => {
        if(cart.id) return;
        const activeCart = await apiCarts.fetchActiveCart();
        if(!activeCart){
            await apiCarts.create();
        }
    },[cart])

    useEffect(() => {
        cartCheck()
    },[cartCheck])

    const fetchCart = useCallback( 
        async () => {
            const activeCart = await apiCarts.fetchActiveCart();
            if(activeCart){
                setCart(activeCart);
                setProducts(activeCart.products);
            }
        },[]
    );

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const renderProducts = () => {
        let productArray = products.map(product => <CartProductView key={product.id} product={product} cart={cart} fetchCart={fetchCart} />)
        return productArray;
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

