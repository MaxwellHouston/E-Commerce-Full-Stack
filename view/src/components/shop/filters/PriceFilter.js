import { useState } from "react";
import { DropdownButton } from "./DropdownButton";

export function PriceFilter({updateFilter, resetFilter, price}) {

    const [visible, setVisible] = useState(false);

    const priceFieldset = document.getElementById('price-filter');

    const togglePrice = () => {
        visible === true ? setVisible(false) : setVisible(true);
    };

    const buttonStyle = {
        display: visible === true ? 'block' : 'none'
    }

    const handleChange = ({target}) => {
        let priceRange = target.value.split(',');
        updateFilter('price', priceRange);
    };
    
    const resetPrice = (e) => {
        e.preventDefault();
        updateFilter('price', '');
        resetFilter(priceFieldset);
    };

    return(
        <fieldset id='price-filter' onChange={handleChange}>
            <h2>Price</h2>
            <DropdownButton toggleCategory={togglePrice} visible={visible} />
            <div id="price-inputs" className="filter-inputs" style={buttonStyle}>
                {price && <button className="clear-btn" onClick={resetPrice}>clear</button>}
                <input type='radio' id='0-25' name='price' value='0,25' />
                <label for='0-25'>$0 - $25</label>
                <br/>
                <input type='radio' id='25-50' name='price' value='25,50' />
                <label for='25-50'>$25 - $50</label>
                <br/>
                <input type='radio' id='50-75' name='price' value='50,75' />
                <label for='50-75'>$50 - $75</label>
                <br/>
                <input type='radio' id='75-plus' name='price' value='75,500' />
                <label for='75-plus'>$75 +</label>
            </div> 
        </fieldset>
    )
}