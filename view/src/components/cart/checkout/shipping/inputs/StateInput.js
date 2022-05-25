
export const StateInput = ({state, updateAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('state', target.value);
    };

    return (
        <fieldset className="input-container">
            <label className={state ? 'input-filled' : 'input-empty'}>State</label>
            <input onChange={handleInput} value={state} />
        </fieldset>
    )
}