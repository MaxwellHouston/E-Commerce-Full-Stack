
export const AddressCard = ({address, updateAddress, close}) => {

    const handleUpdate= (e) => {
        updateAddress('street', address.street);
        updateAddress('city', address.city);
        updateAddress('state', address.state);
        updateAddress('zip', address.zip);
        updateAddress('comments', address.comments);
        close(e);
    };

    return(
        <div className="address-card" onClick={handleUpdate}>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.state}</p>
            <p>{address.zip}</p>
            <p>{address.comments}</p>
        </div>
    )
}