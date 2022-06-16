
export const ZipInput = ({zip, updateAddress, selectedAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('zip', target.value);
    };

    return (
        <fieldset id='zip-input' className="input-container">
            <label className={zip ? 'input-filled' : 'input-empty'}>Zip</label>
            <input onChange={handleInput} value={zip} disabled={selectedAddress === 0 ? false : true} required />
        </fieldset>
    )
}