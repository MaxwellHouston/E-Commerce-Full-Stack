import { createContext, useState, useCallback } from "react";
import apiCarts from "../../utilities/api/apiCarts";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] =useState({});

    const cartCheck = useCallback (async () => {
        if(cart.id) return;
        const activeCart = await apiCarts.fetchActiveCart();
        if(!activeCart){
            await apiCarts.create();
        }
    },[cart]);


    const loadCart = useCallback (async () => {
        const activeCart = await apiCarts.fetchActiveCart();
        if(activeCart) setCart(activeCart);
    },[]);

    const updateQty = useCallback( async (productId, qty) => {
        const res = await apiCarts.updateItemQty(productId, qty, cart.id);
        if(res.message === 'Qty updated') return true;
    }, [cart]);


    const addProduct = async (data) => {
        const res = await apiCarts.addItemToCart(data);
        return res;
    };


    return (
        <CartContext.Provider value={{cart: cart, load: loadCart, check: cartCheck, updateQty: updateQty, addProduct: {addProduct}}}>
            {children}
        </CartContext.Provider>
    )
}