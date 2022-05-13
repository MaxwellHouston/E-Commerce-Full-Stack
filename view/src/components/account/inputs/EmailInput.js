export function EmailInput({updateNewUser, updateNewLogin, email}) {

    const handleEmail = ({target}) => {
        if(updateNewUser){
            updateNewUser('email', target.value)
        } else {
            updateNewLogin('email', target.value)
        }
    };

    return(
        <fieldset className="input-container">
            <label for='email' className={email ? 'input-filled' : 'input-empty'}>Email</label>
            <input name='email' onChange={handleEmail} type='email' required />
        </fieldset>
        )
}