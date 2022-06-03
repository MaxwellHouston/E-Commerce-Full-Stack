import { useState } from "react";
import { AddressModal } from "../../../Modal/AddressModal";
import { AddressForm } from "./AddressForm";
import { AddressList } from "./AddressList";

export const Shipping = ({address, updateAddressByInput, updateAddressByObject}) => {

    const [selectedAddress, setSelectedAddress] = useState(0);
    const [showAddressModal, setShowAddressModal] = useState(false);

    const updateAddressAndId = (newAddress) => {
        setSelectedAddress(newAddress.id);
        updateAddressByObject(newAddress);
    };

    const resetAddress = () => {
        updateAddressByObject({street: '', city: '', state: '', zip: '', comments: ''});
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

    const scrollToActive = () => {
        const activeCard = document.getElementById(`address-card-${selectedAddress}`);
        activeCard.scrollIntoView(false);
    }

    return(
        <div className="shipping">
            <AddressModal show={showAddressModal} close={toggleAddressModal} address={address} updateAddress={updateAddressAndId} scrollToActive={scrollToActive} />
            <h2>Shipping</h2>
            <AddressList updateAddress={updateAddressAndId} selectedAddress={selectedAddress} resetAddress={resetAddress} />
            <p className="or-divider"><span>Or</span></p>
            <AddressForm address={address} updateAddress={updateAddressByInput} toggleAddressModal={toggleAddressModal} selectedAddress={selectedAddress} />
        </div>

    )
}