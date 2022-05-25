import { OrderSummary } from "../OrderSummary"
import { Payment } from "./payment/Payment"
import { Shipping } from "./shipping/Shipping"


export const Checkout = ({subTotal}) => {

    return(
        <div className="checkout-page">
            <OrderSummary subTotal={subTotal} />
            <Shipping />
            <Payment />
        </div>
    )
}