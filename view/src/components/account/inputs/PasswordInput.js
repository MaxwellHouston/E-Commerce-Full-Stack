export function PasswordInput({updateNewUser, updateNewLogin, password}) {

    const handlePassword = ({target}) => {
        if(updateNewUser){
            updateNewUser('password', target.value)
        } else {
            updateNewLogin('password', target.value)
        }
    };

    return(
        <fieldset className="input-container">
            <label for='password' className={password ? 'input-filled' : 'input-empty'}>Password</label>
            <input name='password' onChange={handlePassword} type='password' />
        </fieldset>
        )
}