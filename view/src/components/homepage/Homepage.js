import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { NoUserModal } from "../Modal/NoUserModal";
import { SportSlider } from "./SportSlider";

export function Homepage (){

    const { user } = useContext(UserContext);

    return(
        <div className="homepage-container">
            <Link to='/shop' className="large-shop-container" id='shop-all'>Shop All Products</Link>
            <Link to='/shop/all/apparel' className="large-shop-container" id='shop-apparel' >Shop Apparel</Link>
            <Link to='/shop/all/equipment' className="large-shop-container" id='shop-equipment' >Shop Equipment</Link>
            <SportSlider />
            {!user.id && <NoUserModal />} 
        </div>
    )
}