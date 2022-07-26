import React from "react";
import { Link, useLocation } from "react-router-dom";



export function AccountBreadcrumbs() {
    const location = useLocation();

    const renderCrumb = () => {
         if (location.pathname.includes('cart')){
            return(
                <li><Link to='/account/cart' >Cart</Link></li>
            )
        } else if (location.pathname.includes('addresses')){
            return(
                <li><Link to='/account/address' >Addresses</Link></li>
            )
        } else if (location.pathname.includes('orders')){
            return(
                <li><Link to='order'>Orders</Link></li>
            )
        }
    }

    return(
        <ul className="breadcrumb">
            <li><Link to='/account'>Account</Link></li>
            {renderCrumb()}
            {location.pathname.includes('checkout') && <li><Link to='/account/cart/checkout'>Checkout</Link></li>}
        </ul>
    )
}