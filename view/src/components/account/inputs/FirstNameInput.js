export function FirstNameInput({updateNewUser, firstname}) {

    const handleFirstName = ({target}) => {
        updateNewUser('first_name', target.value)
    };

    return(
        <fieldset className="input-container">
                    <label for='first-name' className={firstname ? 'input-filled' : 'input-empty'} >First Name</label>
                    <input onChange={handleFirstName} name='first-name' />
        </fieldset>
        )
}