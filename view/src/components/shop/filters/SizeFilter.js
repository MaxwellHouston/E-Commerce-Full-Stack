import { useState } from "react";
import { DropdownButton } from "./DropdownButton";

export function SizeFilter({updateFilter, resetFilter, size}) {

    const [visible, setVisible] = useState(false);

    const sizeFieldset = document.getElementById('size-filter');

    const toggleSize = () => {
        visible === true ? setVisible(false) : setVisible(true);
    };

    const buttonStyle = {
        display: visible === true ? 'block' : 'none'
    };

    const handleChange = ({target}) => {
        updateFilter('size', target.value);
    };

    const resetSize = (e) => {
        e.preventDefault();
        updateFilter('size', '');
        resetFilter(sizeFieldset);
    };


    return(
        <fieldset id='size-filter' onChange={handleChange}>
            <h2>Size</h2>
            <DropdownButton toggleCategory={toggleSize} visible={visible} />
            <div id="size-inputs" className="filter-inputs" style={buttonStyle}>
                <input type='radio' id='small' name='size' value='S' />
                <label for='small'>Small</label>
                <br/>
                <input type='radio' id='medium' name='size' value='M' />
                <label for='medium'>Medium</label>
                <br/>
                <input type='radio' id='large' name='size' value='L' />
                <label for='large'>Large</label>
                <br/>
                <input type='radio' id='one-size' name='size' value='One-Size' />
                <label for='one-size'>One-Size</label>
            </div>
            {size && <button className="clear-btn" onClick={resetSize}>clear</button>}
        </fieldset>
    )
}