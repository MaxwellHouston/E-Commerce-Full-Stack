import { CartProductList } from "./CartProductList";
import { OrderSummary } from "./OrderSummary";
import { useNavigate } from "react-router-dom";

export const CartOverview = ({products, subTotal}) => {

    const navigate = useNavigate();

    const toCheckout = () => {
        navigate('/account/cart/checkout');
    };

    return(
        <div className="cart-overview">
            <CartProductList products={products} />
            <div className="order-summary-container">
                <h2>Order Summary</h2>
                <OrderSummary subTotal={subTotal} />
                <button className='submit-btn' onClick={toCheckout}>Check Out</button>
            </div>
        </div>
    )
}