import React from "react";
import { Link } from "react-router-dom";



export function Breadcrumbs({urlParams}) {
    const {sport, category, product} = urlParams;



    return(
        <ul className="breadcrumb">
            <li><Link to='#'>home</Link></li>
            <li><Link to='#'>shop</Link></li>
            {sport && <li><Link to='#'>{sport}</Link></li>}
            {category && <li><Link to='#'>{category}</Link></li>}
            {product && <li><Link to='#'>{product}</Link></li>}
        </ul>
    )
}