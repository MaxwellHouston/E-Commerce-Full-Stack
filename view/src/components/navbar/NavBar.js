import React, { useContext } from "react";
import { Link } from "react-router-dom";
import siteLogo from '../../utilities/images/logos/max-logo.png'; 
import { UserContext } from "../context/UserContext";
import { ApparelMenu } from "./dropdowns/ApparelMenu";
import { CartMenu } from "./dropdowns/CartMenu";
import { EquipmentMenu } from "./dropdowns/EquipmentMenu";
import { FavoritesMenu } from "./dropdowns/FavoritesMenu";
import { UserMenu } from "./dropdowns/UserMenu";
import { SearchBar } from "./SearchBar";


export function NavBar() {

    const { user } = useContext(UserContext);

    return (
        <div className="header">
            <Link to={user.id ? '/homepage' : '/'}><img className='page-logo' src={siteLogo} alt='Company Logo' /></Link> 
            <nav>
                <ul className="shop-links">
                    <ApparelMenu />
                    <EquipmentMenu />
                    <li className="nav-dropdown"><Link to='/shop/gear'>Accessories</Link></li>
                </ul>
            <SearchBar />
            <ul className="header-icons">
                <CartMenu user={user} />
                <FavoritesMenu user={user} />
                <UserMenu user={user} />
            </ul>
            </nav>
        </div>
    )
}