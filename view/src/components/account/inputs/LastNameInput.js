export function LastNameInput({updateNewUser, lastname}) {

    const handleLastName = ({target}) => {
        updateNewUser('last_name', target.value)
    };

    return(
        <fieldset className="input-container">
            <label for='last-name' className={lastname ? 'input-filled' : 'input-empty'}>Last Name</label>
            <input onChange={handleLastName} name='last-name' required />
        </fieldset>
        )
}