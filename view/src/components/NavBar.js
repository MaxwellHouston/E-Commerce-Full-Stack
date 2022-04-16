import React from "react";
import { Link } from "react-router-dom";
import cartIcon from '../utilities/images/icons/cart.ico';    
import userIcon from '../utilities/images/icons/user.ico';
import favoriteIcon from '../utilities/images/icons/favorites.ico'; 
import searchIcon from '../utilities/images/icons/search.svg';
import siteLogo from '../utilities/images/max-logo.png'; 


export function NavBar() {
    return(
        <div className="header">
            <img className='page-logo' src={siteLogo} alt='Company Logo' />
            <nav>
                <ul>
                    <li><Link to='#'>Apparel</Link>
                        <ul className="nav-dropdown">
                            <li><Link to='home/baseball/apparel'>Baseball</Link></li>
                            <li><Link to='home/soccer/apparel'>Soccer</Link></li>
                            <li><Link to='home/tennis/apparel'>Tennis</Link></li>
                            <li><Link to='home/basketball/apparel'>Basketball</Link></li>
                            <li><Link to='home/football/apparel'>Football</Link></li>
                            <li><Link to='home/running/apparel'>Running</Link></li>
                            <li><Link to='home/lacross/apparel'>Lacross</Link></li>
                            <li><Link to='home/hockey/apparel'>Hockey</Link></li>
                            <li><Link to='home/fishing/apparel'>Fishing</Link></li>
                        </ul>
                    </li>
                    <li><Link to='#'>Equipment</Link>
                        <ul className="nav-dropdown">
                            <li><Link to='home/baseball/equipment'>Baseball</Link></li>
                            <li><Link to='home/soccer/equipment'>Soccer</Link></li>
                            <li><Link to='home/tennis/equipment'>Tennis</Link></li>
                            <li><Link to='home/basketball/equipment'>Basketball</Link></li>
                            <li><Link to='home/football/equipment'>Football</Link></li>
                            <li><Link to='home/running/equipment'>Running</Link></li>
                            <li><Link to='home/lacross/equipment'>Lacross</Link></li>
                            <li><Link to='home/hockey/equipment'>Hockey</Link></li>
                            <li><Link to='home/fishing/equipment'>Fishing</Link></li>
                        </ul>
                    </li>
                    <li><Link to='#'>Accessories</Link></li>
                </ul>
            </nav>
            <form className="search-bar" autoComplete="off">
                <button class='search-btn' type='submit'>
                    <img id='search-icon' src={searchIcon} alt='search button' />
                </button>
                <input type='search' name='search' required placeholder="Search" />
            </form>
            <div className="header-icons">
                <Link to='#'><img src={cartIcon} alt='Cart' /></Link>
                <Link to='#'><img src={favoriteIcon} alt='Favorites' /></Link>
                <Link to='#'><img src={userIcon} alt='Account' /></Link>
            </div>
        </div>
    )
}