import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export function RemoveItemBtn({productId}) {

    const { removeProduct } = useContext(CartContext);

    const handleClick = async () => {
        const res = await removeProduct(productId);
        if(!res) console.log('Could not delete');
    }

    return(
        <button onClick={handleClick}>X</button>
    )
}