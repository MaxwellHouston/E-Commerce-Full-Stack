import { CartProductCard } from "./CartProductCard";
import { LoadingWheel } from "../animated/LoadingWheel";

export const CartProductList = ({products}) => {

    const renderProducts = () => {
        if(products){
            if(products.length === 0) return (<li className="empty-cart">Cart Empty</li>);
            let productArray = products.map(product => <CartProductCard key={product.id} product={product} />)
            return productArray;
        } else {
            return (
                <li className="loading-cart">
                    <LoadingWheel />
                </li>
            )
        }
    };

    return (
        <ul className="cart-items-list">
            {renderProducts()}
        </ul>
    )
}