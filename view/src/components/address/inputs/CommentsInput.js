
export const CommentsInput = ({comments, updateAddress, selectedAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('comments', target.value);
    };

    return (
        <fieldset className="input-container">
            <label className={comments ? 'input-filled' : 'input-empty'}>Comments</label>
            <textarea onChange={handleInput} value={comments} disabled={selectedAddress === 0 ? false : true} />
        </fieldset>
    )
}