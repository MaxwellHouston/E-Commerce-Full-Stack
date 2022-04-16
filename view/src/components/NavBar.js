import React from "react";
import { Link } from "react-router-dom";
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
                <Link to='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </Link>
                <Link to='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg> 
                </Link>
                <Link to='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </Link>

            </div>
        </div>
    )
}