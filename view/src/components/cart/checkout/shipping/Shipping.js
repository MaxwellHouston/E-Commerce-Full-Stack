import { useContext, useState } from "react";
import { ShippingForm } from "./ShippingForm";
import { AddressList } from "../../../address/AddressList";
import { AddressContext } from "../../../context/AddressContext";
import { AddressVerificationModal } from "../../../Modal/AddressVerificationModal";

export const Shipping = ({address, updateAddressByInput, updateAddressByObject}) => {

    const [selectedAddress, setSelectedAddress] = useState(0);
    const [showAddressModal, setShowAddressModal] = useState(false);

    const { saveAddress } = useContext(AddressContext);

    const updateAddressAndId =  async (newAddress) => {
        setSelectedAddress(newAddress.id);
        updateAddressByObject(newAddress);
    };

    const resetAddress = () => {
        updateAddressByObject({street: '', city: '', state: '', zip: '', comments: ''});
        setSelectedAddress(0);
    };

    const toggleAddressModal = (e) => {
        if(e) e.preventDefault();
        if(showAddressModal === false){
            setShowAddressModal(true);
        } else {
            setShowAddressModal(false);
        }
    };

    const saveNewAddress = async (validatedAddress) => {
        let saveResponse = await saveAddress(validatedAddress);
        if(saveResponse) {
            updateAddressAndId(saveResponse);
            return 'Address Saved';
        } else {
            return false;
        }
    };

    return(
        <div className="shipping">
            <AddressVerificationModal show={showAddressModal} close={toggleAddressModal} address={address} addressFunction={saveNewAddress} />
            <h2>Shipping</h2>
            <AddressList updateAddress={updateAddressAndId} selectedAddress={selectedAddress} resetAddress={resetAddress} deleteAddress={false} />
            <p className="or-divider"><span>Or</span></p>
            <ShippingForm address={address} updateAddress={updateAddressByInput} toggleAddressModal={toggleAddressModal} selectedAddress={selectedAddress} />
        </div>
    )
}                                                                 