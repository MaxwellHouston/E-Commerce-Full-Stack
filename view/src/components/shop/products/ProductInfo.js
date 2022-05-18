import { useState } from "react";
import apiCarts from "../../../utilities/api/apiCarts";
import { CartResponseModal } from "../../Modal/CartResponseModal";
import { ColorDropdown } from "./inputs/ColorDropdown";
import { QtyInput } from "./inputs/QtyInput";
import { SizeDropdown } from "./inputs/SizeDropdown";

export function ProductInfo({product}) {

    const [qty, setQty] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const updateQty = (newQty) => {
        setQty(newQty);
    };

    const incrementQty = () => {
        setQty(prev => prev + 1);
    };

    const decrementQty = () => {
        if((qty-1) <= 0){
            setQty(1)
        } else {
            setQty(prev => prev - 1);
        };   
    };

    const addToCart = async (e) => {
        e.preventDefault()
        let data = {
            product_id: product.id,
            qty,
        };
        const res = await apiCarts.addItemToCart(data);
        responseHandler(res);
    };

    const responseHandler = (response) => {
        if(response.status === 400){
            setModalMessage('Product already in cart');
            setShowModal(true);    
        } else {
            setModalMessage(response.message);
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    return(
        <div>
            <CartResponseModal show={showModal} modalMessage={modalMessage} close={closeModal} />
            <h1>{product.name}</h1>
            <p className="product-price">{`${product.price}`}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-dropdown-container">
                <ColorDropdown product={product} />
                <SizeDropdown product={product} />
            </div>
            <QtyInput qty={qty} updateQty={updateQty} incrementQty={incrementQty} decrementQty={decrementQty} />
            <button className="submit-btn" onClick={addToCart}>Add to cart</button>
        </div>
    )
}