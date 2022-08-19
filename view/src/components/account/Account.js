import { Route, Routes } from "react-router-dom";
import { DeleteModal } from "../Modal/DeleteModal";
import { Cart } from "../cart/Cart";
import { UserPage } from "./UserPage";
import { Orders } from "../orders/Orders";
import { Address } from "../address/Address";
import { AccountBreadcrumbs } from "./AccountBreadcrumbs";
import { NoUserModal } from "../Modal/NoUserModal";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export function Account() {

    const { user } = useContext(UserContext);

    return(
        <div className="account-background">
            {!user.id && <NoUserModal />}
            <AccountBreadcrumbs />
            <Routes>
                <Route path='/' element={<UserPage />} />
                <Route path='/cart/*' element={<Cart />} />
                <Route path='/delete-account' element={<DeleteModal />} />
                <Route path='/orders/*' element={<Orders />} />
                <Route path='/addresses' element={<Address />} />
            </Routes>
        </div>
    )
}