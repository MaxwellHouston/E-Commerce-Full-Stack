
export const CommentsInput = ({comments, updateAddress}) => {

    const handleInput = ({target}) => {
        updateAddress('comments', target.value);
    };

    return (
        <fieldset className="input-container">
            <label className={comments ? 'input-filled' : 'input-empty'}>Comments</label>
            <textarea onChange={handleInput} value={comments}/>
        </fieldset>
    )
}