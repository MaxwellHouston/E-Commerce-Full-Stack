
export const OrderProductCard = ({product}) => {

    const imgPath = require(`../../utilities/images/products/${product.id.slice(0,4)}.jpg`);

    return(
        <li className="order-product-view">
            <img src={imgPath} alt={product.name} />
            <div className="order-product-info">
                <h2>{product.name}</h2>
                <p className="order-product-price">{product.price}</p>
                <div className="color-size-container">
                    <p className="order-product-color">Color: {product.color}</p>
                    <p className="order-product-size">Size: {product.size}</p>
                </div>
                <p className="order-product-qty">Qty: {product.qty}</p>
            </div>
        </li>
    )
}