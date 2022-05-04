export function CategoryFilter({updateFilter, resetFilter, category}) {

    const categoryInputs = document.getElementById('category-inputs');
    const categoryFieldset = document.getElementById('category-filter');

    const toggleCategory = (e) => {
        e.preventDefault();
        categoryInputs.style.display === 'none' ? categoryInputs.style.display = 'block' : categoryInputs.style.display = 'none';
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
            <button onClick={toggleCategory}>^</button>
            <div id="category-inputs">
                {category && <button className="clear-btn" onClick={resetCategory}>clear</button>}
                <input type='radio' id='apparel' name='category' value='apparel' />
                <label for='apparel'>Apparel</label>
                <br/>
                <input type='radio' id='equipment' name='category' value='equipment' />
                <label for='equipment'>Equipment</label>
            </div>
        </fieldset>
    )
}