import React from "react";
import { Link } from "react-router-dom";



export function Breadcrumbs({urlParams}) {
    const {sport, category, item} = urlParams;

    return(
        <ul className="breadcrumb">
            <li><Link to='/homepage'>home</Link></li>
            <li><Link to='/shop'>shop</Link></li>
            {sport && <li><Link to={`/shop/${sport}`} >{sport}</Link></li>}
            {category && <li><Link to={`/shop/${sport ? sport : 'all'}/${category}`}>{category}</Link></li>}
            {item && <li><Link to='#'>{item}</Link></li>}
        </ul>
    )
}