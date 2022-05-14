import { Link } from "react-router-dom";

export function EquipmentMenu() {
    return (
        <li className="nav-dropdown">
            <Link to='/shop/all/equipment'>Equipment</Link>
            <ul className="dropdown-menu">
                <li><Link to='/shop/baseball/equipment'>Baseball</Link></li>
                <li><Link to='/shop/soccer/equipment'>Soccer</Link></li>
                <li><Link to='/shop/tennis/equipment'>Tennis</Link></li>
                <li><Link to='/shop/basketball/equipment'>Basketball</Link></li>
                <li><Link to='/shop/football/equipment'>Football</Link></li>
                <li><Link to='/shop/running/equipment'>Running</Link></li>
                <li><Link to='/shop/lacrosse/equipment'>Lacrosse</Link></li>
                <li><Link to='/shop/hockey/equipment'>Hockey</Link></li>
                <li><Link to='/shop/fishing/equipment'>Fishing</Link></li>
            </ul>
        </li>
    )
}