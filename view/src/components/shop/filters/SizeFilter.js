export function SizeFilter({updateFilter, resetFilter, size}) {

    const sizeInputs = document.getElementById('size-inputs');
    const sizeFieldset = document.getElementById('size-filter');

    const toggleSize = (e) => {
        e.preventDefault();
        sizeInputs.style.display === 'none' ? sizeInputs.style.display = 'block' : sizeInputs.style.display = 'none';
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
            <button onClick={toggleSize}>^</button>
            <div id="size-inputs">
                {size && <button className="clear-btn" onClick={resetSize}>clear</button>}
                <input type='radio' id='small' name='size' value='S' />
                <label for='small'>Small</label>
                <br/>
                <input type='radio' id='medium' name='size' value='M' />
                <label for='medium'>Medium</label>
                <br/>
                <input type='radio' id='large' name='size' value='L' />
                <label for='large'>Large</label>
                <br/>
                <input type='radio' id='one-size' name='size' value='one-size' />
                <label for='one-size'>One-Size</label>
            </div>
        </fieldset>
    )
}