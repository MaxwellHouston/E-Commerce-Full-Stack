import { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { QtyInput } from "../shop/products/inputs/QtyInput";
import { RemoveItemBtn } from "./RemoveItemBtn";


export function CartProductView({product}) {

    const [qty, setQty] = useState(product.qty);

    const {cart, updateQty} = useContext(CartContext);

    const imgPath = require(`../../utilities/images/products/${product.id.slice(0,4)}.jpg`);

    const sendQtyUpdate = useCallback( async () => {
        if(qty !== product.qty){
            const res = await updateQty(product.id, qty);
            if(!res){
                console.log('Update qty failed');
                setQty(product.qty);
            }
        }
    }, [product, qty, updateQty]);

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
                <RemoveItemBtn productId={product.id} cartId={cart.id} />
                <QtyInput qty={qty} incrementQty={incrementQty} decrementQty={decrementQty} disabled={true} />
            </div>
        </li>
    )
}