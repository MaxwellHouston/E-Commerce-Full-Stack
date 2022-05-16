export function ConfirmPasswordInput({updateFunction, confirmPassword}) {

    const handleConfirmPassword = ({target}) => {
        updateFunction('confirmPassword', target.value)
    };

    return(
        <fieldset className="input-container">
            <label for='confirm-password' className={confirmPassword ? 'input-filled' : 'input-empty'}>Confirm Password</label>
            <input name='confirm-password' onChange={handleConfirmPassword} type='password' value={confirmPassword} required />
        </fieldset>
        )
}