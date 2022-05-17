import { Link } from "react-router-dom";

export function UserMenu({user}) {

    const rendeUserOptions = () => {
        if(!user.id) {
            return (
                <ul className="dropdown-menu" id='user-menu'>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                );
        } else {
            return (
                <ul className="dropdown-menu" id='user-menu'>  
                    <li><Link to='/account'>Account</Link></li>
                    <li><Link to='#'>Orders</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                    <li className='user-menu-name'>Logged in as:</li>
                    <li className='user-menu-name'>{`${user.first_name} ${user.last_name}`}</li>
                </ul>
            )
        }
    }

    return (
        <li className="nav-dropdown">
            <Link to='#' className="svg-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </Link>
            {rendeUserOptions()}
        </li>
        
    )
}