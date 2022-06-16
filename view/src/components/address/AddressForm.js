import { StreetInput } from "./inputs/StreetInput";
import { CityInput } from "./inputs/CityInput";
import { StateInput } from "./inputs/StateInput";
import { ZipInput } from "./inputs/ZipInput";
import { CommentsInput } from "./inputs/CommentsInput";
import { useEffect, useState } from "react";

export const AddressForm = ({address, addressUpdates, updateAddress, selectedAddress, toggleAddressModal}) => {

    const [updatesAvailable, setUpdatesAvailable] = useState(false);

    useEffect(() => {
        if(Object.keys(addressUpdates).length === 0){
            if(updatesAvailable) setUpdatesAvailable(false);
            return;
        } else {
            if(!updatesAvailable) setUpdatesAvailable(true);
            return;
        }
    }, [addressUpdates, updatesAvailable])


    const handleSubmit = (e) => {
        e.preventDefault();
        toggleAddressModal();
    }

    return(
        <form className="address-form" onSubmit={handleSubmit}>
            <StreetInput street={addressUpdates.street || address.street} updateAddress={updateAddress} selectedAddress={0} />
            <CityInput city={addressUpdates.city || address.city} updateAddress={updateAddress} selectedAddress={0} />
            <StateInput state={addressUpdates.state || address.state} updateAddress={updateAddress} selectedAddress={0} />
            <ZipInput zip={addressUpdates.zip || address.zip} updateAddress={updateAddress} selectedAddress={0} />
            <CommentsInput comments={addressUpdates.comments || address.comments} updateAddress={updateAddress} selectedAddress={0} />
            <button className="submit-btn" disabled={updatesAvailable ? false : true}>{selectedAddress === 0 ? 'Save Address' : 'Update Address'}</button>
        </form>
    )
}
