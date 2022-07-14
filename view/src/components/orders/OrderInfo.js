import { OrderShipping } from "./OrderShipping"
import currency from 'currency.js';
import { useNavigate } from 'react-router-dom';

export const OrderInfo = ({total, address}) => {

    const navigate = useNavigate();

    const displayTotal = () => {
        return currency(total/100).format();
    };

    const returnBtn = () => {
        navigate('/homepage')
    }

    return(
        <div className="order-info">
            <OrderShipping address={address} />
            <p className="order-total">Total: {displayTotal()}</p>
            <button className="submit-btn" onClick={returnBtn}>Back to shopping</button>
        </div>
    )
}