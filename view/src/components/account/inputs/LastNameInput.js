export function LastNameInput({updateFunction, lastname}) {

    const handleLastName = ({target}) => {
        updateFunction('last_name', target.value)
    };

    return(
        <fieldset className="input-container">
            <label for='last-name' className={lastname ? 'input-filled' : 'input-empty'}>Last Name</label>
            <input onChange={handleLastName} name='last-name' value={lastname} required />
        </fieldset>
        )
}