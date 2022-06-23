
export const AddressCard = ({address, updateAddress, selectedAddress, deleteAddress}) => {

    const handleUpdate= () => {
        let addressObject = {
            id: address.id,
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            comments: address.comments
        }
        updateAddress(addressObject);
    };

    const handleDelete = () => {
        deleteAddress(address.id);
    }

    return(
        <div className={selectedAddress === address.id ? "address-card selected" : "address-card"} id={`address-card-${address.id}`} onClick={handleUpdate}>
            {deleteAddress && <button className="card-delete-btn" onClick={handleDelete}>{String.fromCharCode(215)}</button>}
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.state}</p>
            <p>{address.zip}</p>
        </div>
    )
}