import { CartProductList } from "./CartProductList";
import { OrderSummary } from "./OrderSummary";
import { useNavigate } from "react-router-dom";

export const CartOverview = ({products, subTotal}) => {

    const navigate = useNavigate();

    const toCheckout = () => {
        navigate('/account/cart/checkout');
    };

    const btnDisabled = products.length === 0 ? true : false;

    return(
        <div className="cart-overview">
            <h1 className="account-header">Cart Summary</h1>
            <div className="product-list-container">
                <CartProductList products={products} />
            </div>
            <div className="order-summary-container">
                <OrderSummary subTotal={subTotal} />
                <button className='submit-btn' onClick={toCheckout} disabled={btnDisabled}>Check Out</button>
            </div>
        </div>
    )
}
