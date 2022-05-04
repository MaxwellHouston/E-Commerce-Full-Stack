export function SportFilter({updateFilter, resetFilter, sport}) {

    const sportInputs = document.getElementById('sport-inputs');
    const sportFieldset = document.getElementById('sport-filter');

    const toggleSport = (e) => {
        e.preventDefault();
        sportInputs.style.display === 'none' ? sportInputs.style.display = 'block' : sportInputs.style.display = 'none';
    };

    const handleChange = ({target}) => {
        updateFilter('sport', target.value);
    };
    
    const resetSport = (e) => {
        e.preventDefault();
        updateFilter('sport', '');
        resetFilter(sportFieldset);
    };


    return(
        <fieldset id='sport-filter' onChange={handleChange}>
            <h2>Sport</h2>
            <button onClick={toggleSport}>^</button>
            <div id="sport-inputs">
                {sport && <button className="clear-btn" onClick={resetSport}>clear</button>}
                <input type='radio' id='baseball' name='sport' value='baseball' />
                <label for='baseball'>Baseball</label>
                <br/>
                <input type='radio' id='soccer' name='sport' value='soccer' />
                <label for='soccer'>Soccer</label>
                <br/>
                <input type='radio' id='tennis' name='sport' value='tennis' />
                <label for='tennis'>Tennis</label>
                <br/>
                <input type='radio' id='basketball' name='sport' value='basketball' />
                <label for='basketball'>Basketball</label>
                <br/>
                <input type='radio' id='football' name='sport' value='football' />
                <label for='football'>Football</label>
                <br/>
                <input type='radio' id='running' name='sport' value='running' />
                <label for='running'>Running</label>
                <br/>
                <input type='radio' id='lacrosse' name='sport' value='lacrosse' />
                <label for='lacrosse'>Lacrosse</label>
                <br/>
                <input type='radio' id='hockey' name='sport' value='hockey' />
                <label for='hockey'>Hockey</label>
                <br/>
                <input type='radio' id='fishing' name='sport' value='fishing' />
                <label for='fishing'>Fishing</label>
            </div>
        </fieldset>
    )
}