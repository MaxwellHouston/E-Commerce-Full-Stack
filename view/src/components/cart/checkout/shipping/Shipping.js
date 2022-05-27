import { useState } from "react";
import apiAccount from "../../../../utilities/api/apiAccount"
import { AddressModal } from "../../../Modal/AddressModal";
import { AddressList } from "./AddressList";
import { CityInput } from "./inputs/CityInput";
import { CommentsInput } from "./inputs/CommentsInput";
import { StateInput } from "./inputs/StateInput";
import { StreetInput } from "./inputs/StreetInput";
import { ZipInput } from "./inputs/ZipInput";

export const Shipping = () => {

    const [address, setAddress] = useState({street: '', city: '', state: '', zip: '', comments: ''});
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [showAddressModal, setShowAddressModal] = useState(false);

    const updateAddressByInput = (input, value) => {
        setAddress((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const updateAddressByObject = (newAddress) => {
        setSelectedAddress(newAddress.id);
        if(!newAddress.comments) {
            newAddress.comments = '';
        }
        setAddress(newAddress);
    };

    const resetAddress = () => {
        setAddress({street: '', city: '', state: '', zip: '', comments: ''});
        setSelectedAddress(0);
    };

    const toggleAddressModal = (e) => {
        e.preventDefault();
        if(showAddressModal === false){
            setShowAddressModal(true);
        } else {
            setShowAddressModal(false);
        }
    };

    return(
        <div className="shipping">
            <AddressModal show={showAddressModal} close={toggleAddressModal} address={address} updateAddress={updateAddressByObject} />
            <h2>Shipping</h2>
            <AddressList updateAddress={updateAddressByObject} selectedAddress={selectedAddress} resetAddress={resetAddress} />
            <p className="or-divider"><span>Or</span></p>
            <form className="address-form">
                <StreetInput street={address.street} updateAddress={updateAddressByInput} selectedAddress={selectedAddress} />
                <CityInput city={address.city} updateAddress={updateAddressByInput} selectedAddress={selectedAddress} />
                <StateInput state={address.state} updateAddress={updateAddressByInput} selectedAddress={selectedAddress} />
                <ZipInput zip={address.zip} updateAddress={updateAddressByInput} selectedAddress={selectedAddress} />
                <CommentsInput comments={address.comments} updateAddress={updateAddressByInput} selectedAddress={selectedAddress} />
                <button className="submit-btn" onClick={toggleAddressModal} disabled={address.id ? true : false}>Save Address</button>
            </form>
        </div>

    )
}