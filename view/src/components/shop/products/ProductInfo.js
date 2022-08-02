import { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartResponseModal } from "../../Modal/CartResponseModal";
import { ColorDropdown } from "./inputs/ColorDropdown";
import { QtyInput } from "./inputs/QtyInput";
import { SizeDropdown } from "./inputs/SizeDropdown";

export function ProductInfo({product}) {

    const [qty, setQty] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const { addProduct } = useContext(CartContext);

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
        e.preventDefault();
        let data = {
            product_id: product.id,
            qty,
        };
        const res = await addProduct(data);
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

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return(
        <div className="product-info">
            <CartResponseModal show={showModal} modalMessage={modalMessage} close={closeModal} />
            <h1>{product.name}</h1>
            <p className="product-price">{`${product.price}`}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-input-container">
                <ColorDropdown product={product} />
                <SizeDropdown product={product} />
                <QtyInput qty={qty} updateQty={updateQty} incrementQty={incrementQty} decrementQty={decrementQty} />
            </div>
            <button className="submit-btn" onClick={addToCart}>Add to cart</button>
        </div>
    )
}