import { useState } from "react";
import { AddressForm } from "./AddressForm";
import { AddressList } from "./AddressList";

export const Address = () => {

    const [address, setAddress] = useState({street: '', city: '', state: '', zip: '', comments: ''});
    const [addressUpdates, setAddressUpdates] = useState({});
    const [selectedAddress, setSelectedAddress] = useState(0);

     const updateAddressByInput = (input, value) => {
        setAddressUpdates((prev) => ({
            ...prev,
            [input]: value
        }))
    };

    const updateAddressByObject = (addressObject) => {
        if(!addressObject.comments){
            addressObject.comments = '';
        }
        setSelectedAddress(addressObject.id);
        setAddressUpdates({});
        setAddress(addressObject);
    };

    const resetAddress = () => {
        setAddress({street: '', city: '', state: '', zip: '', comments: ''});
        setAddressUpdates({});
    };

    return(
        <div className="addresses">
        <h1>Your Addresses</h1>
            <AddressList updateAddress={updateAddressByObject} selectedAddress={selectedAddress} resetAddress={resetAddress} />
            <AddressForm address={address} addressUpdates={addressUpdates} selectedAddress={selectedAddress} updateAddress={updateAddressByInput} />
        </div>
    )
}