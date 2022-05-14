import { Link } from "react-router-dom";

export function FavoritesMenu({user}) {

    const rendeUserOptions = () => {

        if(!user.id) {
            return (
                <ul className="dropdown-menu" id='favorites-menu'>
                    <li><span>Favorites coming soon!</span></li>
                </ul>
                );
        } else {
            return (
                <ul className="dropdown-menu" id='favorites-menu'>
                    <li><span>Favorites coming soon!</span></li>
                </ul>
            )
        }
        
    }

    return (
        <li className="nav-dropdown">
            <Link to='#' className="svg-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="42" fill="white" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg> 
            </Link>
            {rendeUserOptions()}
        </li>
    )
}