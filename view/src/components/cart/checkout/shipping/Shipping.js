import { useState } from "react";
import apiAccount from "../../../../utilities/api/apiAccount"
import { AddressModal } from "../../../Modal/AddressModal";
import { CityInput } from "./inputs/CityInput";
import { CommentsInput } from "./inputs/CommentsInput";
import { StateInput } from "./inputs/StateInput";
import { StreetInput } from "./inputs/StreetInput";
import { ZipInput } from "./inputs/ZipInput";

export const Shipping = () => {

    const [address, setAddress] = useState({street: '', city: '', state: '', zip: '', comments: ''});
    const [showAddressModal, setShowAddressModal] = useState(false);


    const updateAddress = (input, value) => {
        setAddress((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const toggleAddressModal = (e) => {
        e.preventDefault();
        if(showAddressModal === false){
            setShowAddressModal(true);
        } else {
            setShowAddressModal(false)
        }
    };

    return(
        <form className="address-form">
            <button onClick={toggleAddressModal}>Use saved address</button>
            <AddressModal show={showAddressModal} close={toggleAddressModal} updateAddress={updateAddress} />
            <p className="or-divider"></p>
            <StreetInput street={address.street} updateAddress={updateAddress} />
            <CityInput city={address.city} updateAddress={updateAddress} />
            <StateInput state={address.state} updateAddress={updateAddress} />
            <ZipInput zip={address.zip} updateAddress={updateAddress} />
            <CommentsInput comments={address.comments} updateAddress={updateAddress} />
            <button>Save Address</button>
        </form>
    )
}