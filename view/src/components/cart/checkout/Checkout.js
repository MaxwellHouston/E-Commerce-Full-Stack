import { Payment } from "./payment/Payment";
import { Shipping } from "./shipping/Shipping";


export const Checkout = ({subTotal}) => {

    return(
        <div className="checkout-page">
            <Shipping />
            <Payment subTotal={subTotal} />
        </div>
    )
};  