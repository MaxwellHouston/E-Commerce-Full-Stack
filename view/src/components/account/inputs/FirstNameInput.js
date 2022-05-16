export function FirstNameInput({updateFunction, firstname, updateLocked, toggleUpdate}) {

    const handleFirstName = ({target}) => {
        updateFunction('first_name', target.value);
    };

    const handleToggle = (e) => {
        e.preventDefault()
        toggleUpdate('first_name');
    }

    return(
        <fieldset className="input-container">
                    <label for='first-name' className={firstname ? 'input-filled' : 'input-empty'} >First Name</label>
                    <input onChange={handleFirstName} name='first-name' value={firstname} disabled={updateLocked || false} required />
                    {updateLocked === true && <button className="toggle-update-btn" onClick={handleToggle}>update</button>}
                    {updateLocked === false && <button className="toggle-update-btn" onClick={handleToggle}>cancel</button>}
        </fieldset>
        )
}