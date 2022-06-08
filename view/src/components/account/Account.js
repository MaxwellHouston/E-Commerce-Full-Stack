import { Route, Routes } from "react-router-dom";
import { DeleteModal } from "../Modal/DeleteModal";
import { Cart } from "../cart/Cart";
import { UserPage } from "./UserPage";
import { Orders } from "../orders/Orders";


export function Account() {

    return(
        <div className="account-background">
            <Routes>
                <Route path='/' element={<UserPage />} />
                <Route path='/cart/*' element={<Cart />} />
                <Route path='/delete-account' element={<DeleteModal />} />
                <Route path='/orders/*' element={<Orders />} />
            </Routes>
        </div>
    )
}