export function EmailInput({updateFunction, updateNewLogin, email}) {

    const handleEmail = ({target}) => {
            updateFunction('email', target.value)
    };

    return(
        <fieldset className="input-container">
            <label for='email' className={email ? 'input-filled' : 'input-empty'}>Email</label>
            <input name='email' onChange={handleEmail} type='email' value={email} required />
        </fieldset>
        )
}