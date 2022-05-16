import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import apiAccount from "../../utilities/api/apiAccount"
import { Cart } from "../cart/Cart";
import { FirstNameInput } from "./inputs/FirstNameInput";


export function UserPage({user}) {

    

    return(
        <div>
            <h1>Hello {user.first_name}</h1>
            <form className='user-page-form'>
                <FirstNameInput />
            </form>
            <Routes>
                <Route path='/user/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}