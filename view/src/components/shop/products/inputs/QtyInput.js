
export function QtyInput({qty, updateQty, incrementQty, decrementQty, disabled}) {

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
            <label for='qty'>Qty: </label>
            <input id='qty-input' name='qty' value={qty} onChange={handleQtyChange} onKeyDown={numberValidation} disabled={disabled || false}/>
            <button className="qty-btn" onClick={incrementQty}>+</button>
            <button className="qty-btn" onClick={decrementQty}>-</button>
        </fieldset>

    )
}