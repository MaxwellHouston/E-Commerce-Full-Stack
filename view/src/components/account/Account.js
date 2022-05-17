import { Route, Routes } from "react-router-dom";
import { DeleteModal } from "../Modal/DeleteModal";
import { Cart } from "../cart/Cart";
import { UserPage } from "./UserPage";


export function Account({user, updateUser, clearUser}) {

    return(
        <div className="account-background">
            <Routes>
                <Route path='/' element={<UserPage user={user} updateUser={updateUser} />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/delete-account' element={<DeleteModal clearUser={clearUser} />} />
            </Routes>
        </div>
    )
}