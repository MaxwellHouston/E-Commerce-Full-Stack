export function ColorFilter({updateFilter, resetFilter, color}) {

    const colorInputs = document.getElementById('color-inputs');
    const colorFieldset = document.getElementById('color-filter');

    const toggleColor = (e) => {
        e.preventDefault();
        colorInputs.style.display === 'none' ? colorInputs.style.display = 'block' : colorInputs.style.display = 'none';
    }

    const handleChange = ({target}) => {
        updateFilter('color', target.value);
    };
    
    const resetColor = (e) => {
        e.preventDefault();
        updateFilter('color', '');
        resetFilter(colorFieldset);
    };


    return(
        <fieldset id='color-filter' onChange={handleChange}>
            <h2>Color</h2>
            <button onClick={toggleColor}>^</button>
            <div id="color-inputs">
                {color && <button className="clear-btn" onClick={resetColor}>clear</button>}
                <input type='radio' id='black' name='color' value='Black' />
                <label for='black'>Black</label>
                <br/>
                <input type='radio' id='red' name='color' value='Red' />
                <label for='red'>Red</label>
                <br/>
                <input type='radio' id='blue' name='color' value='Blue' />
                <label for='blue'>Blue</label>
                <br/>
                <input type='radio' id='white' name='color' value='White' />
                <label for='white'>White</label>
                <br/>
                <input type='radio' id='pink' name='color' value='Pink' />
                <label for='pink'>Pink</label>
                <br/>
                <input type='radio' id='none' name='color' value='No Color' />
                <label for='none'>None</label>
            </div>
        </fieldset>
    )
}