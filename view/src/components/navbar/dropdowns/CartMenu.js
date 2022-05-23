import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export function CartMenu({user}) {

    const { cart } = useContext(CartContext);

    const renderCartOptions = () => {
        if(!user.id) {
            return (
                <ul className="dropdown-menu" id='cart-menu'>
                    <li><span>Login to access cart</span></li>
                </ul>
                );
        } else {
            return (
                <ul className="dropdown-menu" id='cart-menu'>
                    <li>Items in Cart: <span>{cart.products ? cart.products.length : 0}</span></li>
                    <li><Link to='/account/cart'>View Cart</Link></li>
                    <li><Link to='/account/cart/checkout'>Checkout</Link></li>
                </ul>
            )
        }
    };

    return (
        <li className="nav-dropdown">
            <Link to='#' className="svg-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </Link>
            {renderCartOptions()}
        </li>
    )
}