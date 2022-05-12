import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SportSlider } from "./SportSlider";

export function Homepage (){

    return(
        <div className="homepage-container">
            <div className="large-shop-container" id='shop-apparel' >
                <Link to='#'>Shop Apparel</Link>
            </div>
            <div className="large-shop-container" id='shop-equipment' >
                <Link to='#'>Shop Equipment</Link>
            </div>
            <h2>Shop By Sport</h2>
            <SportSlider /> 
        </div>
    )
}