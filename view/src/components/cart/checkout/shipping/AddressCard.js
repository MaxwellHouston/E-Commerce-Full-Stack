
export const AddressCard = ({address, updateAddress, selectedAddress}) => {

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

    return(
        <div className={selectedAddress === address.id ? "address-card selected" : "address-card"} onClick={handleUpdate}>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{address.state}</p>
            <p>{address.zip}</p>
        </div>
    )
}