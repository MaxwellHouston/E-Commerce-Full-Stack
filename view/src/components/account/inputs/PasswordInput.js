export function PasswordInput({updateFunction, updateNewLogin, password}) {

    const handlePassword = ({target}) => {
        updateFunction('password', target.value);
    };

    return(
        <fieldset className="input-container">
            <label for='password' className={password ? 'input-filled' : 'input-empty'}>Password</label>
            <input name='password' onChange={handlePassword} type='password' value={password} required />
        </fieldset>
        )
}