import { Link } from "react-router-dom";

export const SportCard = ({sport}) => {
    const upperCase = sport[0].toUpperCase();
    const base = sport.slice(1);
    const title = upperCase+base;
    return (
        <Link to={`/shop/${sport}`} className="small-shop-container" id={`shop-${sport}`} style={{ backgroundImage: `url(${require(`../../utilities/images/backgrounds/${sport}-background.jpg`)})`}} >
            <span>{title}</span>
        </Link>
    ) 
}