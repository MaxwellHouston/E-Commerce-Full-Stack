import { useContext, useEffect, useState } from "react"
import { SlidingContainer } from "../animated/sliding-container/SlidingContainer";
import { AddressContext } from "../context/AddressContext";
import { AddressCard } from "./AddressCard";

export const AddressList = ({updateAddress, selectedAddress, resetAddress}) => {

    const [addressCards, setAddressCards] = useState([]);
    const { addressList, loadAddresses } = useContext(AddressContext);

    useEffect(() => {
        loadAddresses();
    },[loadAddresses]);

    useEffect(() => {
        let cardArray = [];
        cardArray.push(                
            <div className='address-card' id='address-card-0' key={0} onClick={resetAddress}>
                <p>Create New Address</p>
            </div>
        );
        if(addressList.length === 0) return;
        addressList.forEach(address => cardArray.push(<AddressCard key={address.id} address={address} updateAddress={updateAddress} selectedAddress={selectedAddress} />));
        setAddressCards(cardArray);
    },[addressList, resetAddress, selectedAddress, updateAddress])

    return (
        <SlidingContainer cardList={addressCards} sliderId={'address-slider'} />
    )
}
