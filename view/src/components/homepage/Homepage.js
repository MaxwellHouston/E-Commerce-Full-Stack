import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SportSlider } from "./SportSlider";

export function Homepage ({user}){

    const navigate = useNavigate();

    useEffect(() => {
        if(!user.id) navigate('/');
    }, [navigate, user]);


    return(
        <div className="homepage-container">
            <Link to='/shop' className="large-shop-container" id='shop-all'>Shop All Products</Link>
            <Link to='/shop/all/apparel' className="large-shop-container" id='shop-apparel' >Shop Apparel</Link>
            <Link to='/shop/all/equipment' className="large-shop-container" id='shop-equipment' >Shop Equipment</Link>
            <h2>Shop By Sport</h2>
            <SportSlider /> 
        </div>
    )
}