import React from "react";
import { Link } from "react-router-dom";


export function Homepage (){
    return(
        <div className="homepage-container">
            <div className="large-shop-container" id='shop-apparel' >
                <Link to='#'>Shop Apparel</Link>
            </div>
            <div className="large-shop-container" id='shop-equipment' >
                <Link to='#'>Shop Equipment</Link>
            </div>
            
        </div>
    )
}