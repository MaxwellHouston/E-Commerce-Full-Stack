export function ConfirmPasswordInput({updateNewUser, confirmPassword}) {

    const handleConfirmPassword = ({target}) => {
        updateNewUser('confirmPassword', target.value)
    };

    return(
        <fieldset className="input-container">
            <label for='confirm-password' className={confirmPassword ? 'input-filled' : 'input-empty'}>Confirm Password</label>
            <input name='confirm-password' onChange={handleConfirmPassword} type='password' />
        </fieldset>
        )
}