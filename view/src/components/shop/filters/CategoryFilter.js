import { useState } from "react";
import { DropdownButton } from "./DropdownButton";

export function CategoryFilter({updateFilter, resetFilter, category}) {

    const [visible, setVisible] = useState(false);

    const categoryFieldset = document.getElementById('category-filter');

    const toggleCategory = () => {
        visible === true ? setVisible(false) : setVisible(true);
    };

    const buttonStyle = {
        display: visible === true ? 'block' : 'none'
    };

    const handleChange = ({target}) => {
        updateFilter('category', target.value);
    };
    
    const resetCategory = (e) => {
        e.preventDefault();
        updateFilter('category', '');
        resetFilter(categoryFieldset);
    };


    return(
        <fieldset id='category-filter' onChange={handleChange}>
            <h2>Category</h2>
            <DropdownButton toggleCategory={toggleCategory} visible={visible} />
            <div id="category-inputs" className="filter-inputs" style={buttonStyle}>
                <input type='radio' id='apparel' name='category' value='apparel' />
                <label for='apparel'>Apparel</label>
                <br/>
                <input type='radio' id='equipment' name='category' value='equipment' />
                <label for='equipment'>Equipment</label>
            </div>
            {category && <button className="clear-btn" onClick={resetCategory}>clear</button>}
        </fieldset>
    )
}