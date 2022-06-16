
export const CityInput = ({city, updateAddress, selectedAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('city', target.value);
    };

    return (
        <fieldset className="input-container">
            <label className={city ? 'input-filled' : 'input-empty'}>City</label>
            <input onChange={handleInput} value={city} disabled={selectedAddress === 0 ? false : true} required />
        </fieldset>
    )
}