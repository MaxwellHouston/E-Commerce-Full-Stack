import { OrderProductCard } from "./OrderProductCard";

export const OrderProductList = ({products}) => {

    const renderProducts = () => {
        if(!products) return;
        const productCards = products.map(product => <OrderProductCard key={product.id} product={product} />);
        return productCards;
    }

    return(
        <ul className="order-product-list">
            {renderProducts()}
        </ul>
    )
}