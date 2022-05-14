import { Link } from "react-router-dom";

export function ApparelMenu() {
    return (
        <li className="nav-dropdown">
            <Link to='/shop/all/apparel'>Apparel</Link>
            <ul className="dropdown-menu">
                <li><Link to='/shop/baseball/apparel'>Baseball</Link></li>
                <li><Link to='/shop/soccer/apparel'>Soccer</Link></li>
                <li><Link to='/shop/tennis/apparel'>Tennis</Link></li>
                <li><Link to='/shop/basketball/apparel'>Basketball</Link></li>
                <li><Link to='/shop/football/apparel'>Football</Link></li>
                <li><Link to='/shop/running/apparel'>Running</Link></li>
                <li><Link to='/shop/lacrosse/apparel'>Lacrosse</Link></li>
                <li><Link to='/shop/hockey/apparel'>Hockey</Link></li>
                <li><Link to='/shop/fishing/apparel'>Fishing</Link></li>
            </ul>
        </li>
    )
}