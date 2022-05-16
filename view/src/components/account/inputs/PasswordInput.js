export function PasswordInput({updateFunction, password, updateLocked, toggleUpdate}) {

    const handlePassword = ({target}) => {
        updateFunction('password', target.value);
    };

    const handleToggle = (e) => {
        e.preventDefault()
        toggleUpdate('password');
    }

    return(
        <fieldset className="input-container">
            <label for='password' className={password ? 'input-filled' : 'input-empty'}>Password</label>
            <input name='password' onChange={handlePassword} type='password' value={password} disabled={updateLocked || false} required />
            {updateLocked && <button className="toggle-update-btn" onClick={handleToggle}>update</button>}
            {updateLocked === false && <button className="toggle-update-btn" onClick={handleToggle}>cancel</button>}
        </fieldset>
        )
}