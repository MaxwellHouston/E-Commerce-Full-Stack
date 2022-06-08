import { Payment } from "./payment/Payment";
import { Shipping } from "./shipping/Shipping";



export const CheckoutForms = ({subTotal, updateAddressByInput, updateAddressByObject, shippingAddress, total, updateTotal, stripePromise, saveState}) => {

    return (
        <div className="checkout-forms">
            <Shipping updateAddressByInput={updateAddressByInput} updateAddressByObject={updateAddressByObject} address={shippingAddress} />
            <Payment total={total} subTotal={subTotal} updateTotal={updateTotal} stripePromise={stripePromise} shippingAddress={shippingAddress} saveState={saveState} />
        </div>
    )
}