import { Payment } from "./Payment"
import { Shipping } from "./Shipping"


export const Checkout = () => {

    return(
        <div>
            <Shipping />
            <Payment />
        </div>
    )
}