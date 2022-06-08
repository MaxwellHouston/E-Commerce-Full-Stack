import { Route, Routes } from "react-router-dom"
import { OrderConfirmation } from "./OrderConfirmation"


export const Orders = () => {

    return(
        <div className="order-container">
            <Routes>
                <Route path='/order-confirmation' element={<OrderConfirmation />} />
            </Routes>
        </div>
    )
}