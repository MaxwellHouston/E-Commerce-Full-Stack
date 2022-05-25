
export const StreetInput = ({street, updateAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('street', target.value);
    };

    return (
        <fieldset className="input-container">
            <label className={street ? 'input-filled' : 'input-empty'}>Street</label>
            <input onChange={handleInput} value={street}/>
        </fieldset>
    )
}