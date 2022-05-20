import { useCallback, useEffect, useState } from "react";
import apiCarts from "../../utilities/api/apiCarts";
import { QtyInput } from "../shop/products/inputs/QtyInput";
import { RemoveItemBtn } from "./RemoveItemBtn";


export function CartProductView({product, cart, fetchCart}) {

    const [qty, setQty] = useState(product.qty);

    const imgPath = require(`../../utilities/images/products/${product.id.slice(0,4)}.jpg`);

    const sendQtyUpdate = useCallback( async () => {
        if(qty !== product.qty){
            const res = await apiCarts.updateItemQty(product.id, qty, cart.id);
            if(res.message === 'Qty updated'){
                fetchCart();
            } else {
                console.log('Update qty failed');
                setQty(product.qty);
            } 
        }
    }, [cart, product, qty, fetchCart])

    const incrementQty = () => {
        setQty(prev => prev + 1);
    };

    const decrementQty = () => {
        if((qty-1) <= 0){
            setQty(1);
        } else {
            setQty(prev => prev - 1);
        };
    };

    useEffect(() => {
        sendQtyUpdate();
    },[sendQtyUpdate]);

    return(
        <li className="cart-product-view">
            <img src={imgPath} alt={product.name} />
            <div className="cart-product-info">
                <h2>{product.name}</h2>
                <p className="cart-product-price">{product.price}</p>
                <div className="color-size-container">
                    <p className="cart-product-color">Color: {product.color}</p>
                    <p className="cart-product-size">Size: {product.size}</p>
                </div>
                <RemoveItemBtn fetchCart={fetchCart} productId={product.id} cartId={cart.id} />
                <QtyInput qty={qty} incrementQty={incrementQty} decrementQty={decrementQty} disabled={true} />
            </div>
        </li>
    )
}