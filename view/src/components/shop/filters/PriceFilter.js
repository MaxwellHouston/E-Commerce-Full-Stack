export function PriceFilter({updateFilter, resetFilter, price}) {

    const priceInputs = document.getElementById('price-inputs');
    const priceFieldset = document.getElementById('price-filter');

    const togglePrice = (e) => {
        e.preventDefault();
        priceInputs.style.display === 'none' ? priceInputs.style.display = 'block' : priceInputs.style.display = 'none';
    };

    const handleChange = ({target}) => {
        updateFilter('price', target.value);
    };
    
    const resetPrice = (e) => {
        e.preventDefault();
        updateFilter('price', '');
        resetFilter(priceFieldset);
    };

    return(
        <fieldset id='price-filter' onChange={handleChange}>
            <h2>Price</h2>
            <button onClick={togglePrice}>^</button>
            <div id="price-inputs">
                {price && <button className="clear-btn" onClick={resetPrice}>clear</button>}
                <input type='radio' id='0-25' name='price' value='25' />
                <label for='0-25'>$0 - $25</label>
                <br/>
                <input type='radio' id='25-50' name='price' value='50' />
                <label for='25-50'>$25 - $50</label>
                <br/>
                <input type='radio' id='50-75' name='price' value='75' />
                <label for='50-75'>$50 - $75</label>
                <br/>
                <input type='radio' id='75-plus' name='price' value='100' />
                <label for='75-plus'>$75 +</label>
            </div> 
        </fieldset>
    )
}