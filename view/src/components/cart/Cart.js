import { useEffect, useState, useCallback } from "react";
import apiCarts from "../../utilities/api/apiCarts"


export function Cart() {

    const [cart, setCart] = useState({});

    const fetchCart = useCallback( 
        async () => {
            const activeCart = await apiCarts.fetchActiveCart();
            setCart(activeCart);
        }, []
    );

    useEffect(() => {
        fetchCart();
    }, [fetchCart])

    return(
        <div className="cart-container">
            <ul className="cart-items-list">
                <li>Item</li>
            </ul>
            
        </div>
    )
}