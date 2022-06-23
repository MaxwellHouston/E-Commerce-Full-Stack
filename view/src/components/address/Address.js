import { useContext, useState } from "react";
import apiAddress from "../../utilities/api/apiAddress";
import { AddressContext } from "../context/AddressContext";
import { AddressVerificationModal } from "../Modal/AddressVerificationModal";
import { AddressForm } from "./AddressForm";
import { AddressList } from "./AddressList";

export const Address = () => {

    const [address, setAddress] = useState({street: '', city: '', state: '', zip: '', comments: ''});
    const [addressUpdates, setAddressUpdates] = useState({});
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [showAddressModal, setShowAddressModal] = useState(false);
    
    const { saveAddress, updateAddress, loadAddresses } = useContext(AddressContext);

     const updateAddressByInput = (input, value) => {
        setAddressUpdates((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const updateAddressByObject = (addressObject) => {
        if(!addressObject.comments){ addressObject.comments = ''; }
        setSelectedAddress(addressObject.id);
        setAddressUpdates({});
        setAddress(addressObject);
    };

    const saveNewAddress = async (validatedAddress) => {
        let saveResponse = await saveAddress(validatedAddress);
        if(saveResponse) {
            updateAddressByObject(saveResponse);
            return 'Address Saved';
        } else {
            return false;
        }
    };

    const submitAddressUpdates = async () => {
        let updateResponse = await updateAddress(addressUpdates, address.id);
        if(updateResponse) {
            loadAddresses();
            updateAddressByObject(updateResponse);
            return 'Address Updated';
        } else {
            return false;
        }
    };

    const verifyUpdates = () => {
        let updatedAddress = {
            street: addressUpdates.street || address.street,
            city: addressUpdates.city || address.city,
            state: addressUpdates.state || address.state,
            zip: addressUpdates.zip || address.zip,
            comments: addressUpdates.comments || address.comments,
        }
        return updatedAddress;
    };

    const toggleAddressModal = () => {
        if(showAddressModal === false){
            setShowAddressModal(true);
        } else {
            setShowAddressModal(false);
        }
    };

    const deleteAddress = async (addressId) => {
        let deleteResponse = await apiAddress.deleteAddress(addressId);
        if(deleteResponse){
            return 'Address Deleted';
        } else {
            return 'Something went wrong, please try again';
        }
    };

    const resetAddress = () => {
        setAddress({street: '', city: '', state: '', zip: '', comments: ''});
        setAddressUpdates({});
        setSelectedAddress(0);
    };

    return(
        <div className="addresses">
        { selectedAddress === 0 ?
            <AddressVerificationModal show={showAddressModal} close={toggleAddressModal} updateFunction={false} address={addressUpdates} addressFunction={saveNewAddress} />
        :
            <AddressVerificationModal show={showAddressModal} close={toggleAddressModal} updateFunction={true} address={verifyUpdates()} addressFunction={submitAddressUpdates} />
        }
        <h1>Your Addresses</h1>
            <AddressList updateAddress={updateAddressByObject} selectedAddress={selectedAddress} resetAddress={resetAddress} deleteAddress={deleteAddress} />
            <AddressForm address={address} addressUpdates={addressUpdates} selectedAddress={selectedAddress} updateAddress={updateAddressByInput} toggleAddressModal={toggleAddressModal} />
        </div>
    )
}