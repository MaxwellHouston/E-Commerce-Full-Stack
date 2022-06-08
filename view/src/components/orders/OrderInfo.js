import { OrderShipping } from "./OrderShipping"
import currency from 'currency.js';

export const OrderInfo = ({total, address}) => {

    const displayTotal = () => {
        return currency(total/100).format();
    }

    return(
        <div className="order-info">
            <OrderShipping address={address} />
            <p className="order-total">Total: {displayTotal()}</p>
        </div>
    )
}