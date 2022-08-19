import { createContext, useState, useCallback } from "react";
import apiCarts from "../../utilities/api/apiCarts";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] =useState({});

    const loadCart = useCallback (async () => {
        const activeCart = await apiCarts.fetchActiveCart();
        if(activeCart) setCart(activeCart);
    },[]);

    const checkCart = useCallback (async () => {
        if(cart.id) return;
        const activeCart = await apiCarts.fetchActiveCart();
        if(!activeCart){
            await apiCarts.create();
            loadCart();
        }
    },[cart, loadCart]);

    const updateQty = useCallback( async (productId, qty) => {
        const res = await apiCarts.updateItemQty(productId, qty, cart.id);
        if(res.message === 'Qty updated'){
            loadCart();
            return true;
        } else {
            return false
        };
    }, [cart, loadCart]);

    const addProduct = async (data) => {
        const res = await apiCarts.addItemToCart(data, cart.id);
        if(res.message) loadCart();
        return res;
    };

    const removeProduct = async (productId) => {
        const res = await apiCarts.removeItem(productId, cart.id);
        if(res === 204){
            loadCart();
            return true;
        } else {
            return false;
        }
    };

    const deleteCart = useCallback( async (cartId) => {
        await apiCarts.deleteCart(cartId);
        await apiCarts.create();
        loadCart();
    },[loadCart])

    const clearCart = useCallback( 
        () => { setCart({}) }, [] 
    );

    return (
        <CartContext.Provider value={{cart: cart, loadCart: loadCart, checkCart: checkCart, updateQty: updateQty, addProduct: addProduct, removeProduct: removeProduct, deleteCart: deleteCart, clearCart: clearCart}}>
            {children}
        </CartContext.Provider>
    )
}