
export const ZipInput = ({zip, updateAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('zip', target.value);
    };

    return (
        <fieldset className="input-container">
            <label className={zip ? 'input-filled' : 'input-empty'}>Zip</label>
            <input onChange={handleInput} value={zip} />
        </fieldset>
    )
}