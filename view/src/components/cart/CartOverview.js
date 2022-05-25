import { CartProductList } from "./CartProductList"
import { OrderSummary } from "./OrderSummary"

export const CartOverview = ({products, subTotal}) => {


    return(
        <div className="cart-overview">
            <CartProductList products={products} />
            <OrderSummary subTotal={subTotal} />
        </div>
    )
}