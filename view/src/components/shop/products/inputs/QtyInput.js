
export function QtyInput({qty, updateQty, incrementQty, decrementQty}) {

    const handleQtyChange = (e) => {
        let qtyAsNumber = Number(e.target.value);
        if(qtyAsNumber <= 0){
            updateQty(1);
        } else {
            updateQty(qtyAsNumber);
        };   
    };

    const numberValidation = (e) => {
        if(!(/[0-9]/).test(e.key) && e.key !== 'Backspace'){ 
            e.preventDefault();
        } 
    };

    return(
        <fieldset className="qty-input">
            <label for='qty'>Qty:</label>
            <input id='qty-input' name='qty' value={qty} onChange={handleQtyChange} onKeyDown={numberValidation} />
            <button onClick={incrementQty}>+</button>
            <button onClick={decrementQty}>-</button>
        </fieldset>

    )
}