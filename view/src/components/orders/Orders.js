import { Route, Routes } from "react-router-dom"
import { OrderConfirmation } from "./OrderConfirmation"
import { OrdersPage } from "./OrdersPage"

export const Orders = () => {

    return(
        <div className="order-container">
            <Routes>
                <Route path='/' element={<OrdersPage />} />
                <Route path='/order-confirmation' element={<OrderConfirmation />} />
            </Routes>
        </div>
    )
}