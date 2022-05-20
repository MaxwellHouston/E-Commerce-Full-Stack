import apiCarts from "../../utilities/api/apiCarts"


export function RemoveItemBtn({fetchCart, productId, cartId}) {

    const removeItem = async () => {
        const res = await apiCarts.removeItem(productId, cartId);
        if(res === 204){
            fetchCart();
        } else {
            console.log('Delete failed');
        }
    }

    return(
        <button onClick={removeItem}>X</button>
    )
}