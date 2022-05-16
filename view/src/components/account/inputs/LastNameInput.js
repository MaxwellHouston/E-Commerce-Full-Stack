export function LastNameInput({updateFunction, lastname,  updateLocked, toggleUpdate}) {

    const handleLastName = ({target}) => {
        updateFunction('last_name', target.value)
    };

    const handleToggle = (e) => {
        e.preventDefault()
        toggleUpdate('last_name');
    }

    return(
        <fieldset className="input-container">
            <label for='last-name' className={lastname ? 'input-filled' : 'input-empty'}>Last Name</label>
            <input onChange={handleLastName} name='last-name' value={lastname} disabled={updateLocked || false} required />
            {updateLocked && <button className="toggle-update-btn" onClick={handleToggle}>update</button>}
            {updateLocked === false && <button className="toggle-update-btn" onClick={handleToggle}>cancel</button>}
        </fieldset>
        )
}