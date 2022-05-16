export function EmailInput({updateFunction, email, updateLocked, toggleUpdate}) {

    const handleEmail = ({target}) => {
            updateFunction('email', target.value)
    };

    const handleToggle = (e) => {
        e.preventDefault()
        toggleUpdate('email');
    }

    return(
        <fieldset className="input-container">
            <label for='email' className={email ? 'input-filled' : 'input-empty'}>Email</label>
            <input name='email' onChange={handleEmail} type='email' value={email} disabled={updateLocked || false} required />
            {updateLocked && <button className="toggle-update-btn" onClick={handleToggle}>update</button>}
            {updateLocked === false && <button className="toggle-update-btn" onClick={handleToggle}>cancel</button>}
        </fieldset>
        )
}