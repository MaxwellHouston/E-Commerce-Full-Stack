import { useContext, useEffect } from "react"
import { AddressContext } from "../../../context/AddressContext";
import { AddressCard } from "./AddressCard";


export const AddressList = ({updateAddress, selectedAddress, resetAddress}) => {

    const { addressList, loadAddresses } = useContext(AddressContext);
    
    const renderAddresses = () => {
        if(addressList.length === 0){
            return (
                <div className='address-card'>
                    <p>No addresses saved</p>
                </div>
            );
        };
        let addressCards = addressList.map(address => <AddressCard key={address.id} address={address} updateAddress={updateAddress} selectedAddress={selectedAddress} />);
        return addressCards;
    };

    useEffect(() => {
        loadAddresses();
    },[loadAddresses])

    return (
        <div className="address-slider">
            <div className='address-card' id='new-address' onClick={resetAddress}>
                <p>Create New Address</p>
            </div>
            {renderAddresses()}
        </div>
    )
}