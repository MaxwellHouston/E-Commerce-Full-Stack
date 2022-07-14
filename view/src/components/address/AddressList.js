import { useCallback, useContext, useEffect, useState } from "react"
import { SlidingContainer } from "../animated/sliding-container/SlidingContainer";
import { AddressContext } from "../context/AddressContext";
import { AddressCard } from "./AddressCard";

export const AddressList = ({updateAddress, selectedAddress, resetAddress, deleteAddress}) => {

    const [addressCards, setAddressCards] = useState([]);
    const { addressList, loadAddresses } = useContext(AddressContext);

    const handleDelete = useCallback( (addressId) => {
        deleteAddress(addressId);
        loadAddresses();
    }, [deleteAddress, loadAddresses] );

    useEffect(() => {
        loadAddresses();
    },[loadAddresses]);

    useEffect(() => {
        let cardArray = [];
        cardArray.push(                
            <div className={selectedAddress === 0 ? "address-card selected" : "address-card"} id='address-card-0' key={0} onClick={resetAddress}>
                <p>Create New Address</p>
            </div>
        );
        setAddressCards(cardArray);
        if(addressList.length === 0) return;
        addressList.forEach(address => cardArray.push(<AddressCard key={address.id} address={address} updateAddress={updateAddress} selectedAddress={selectedAddress} deleteAddress={handleDelete} />));
        setAddressCards(cardArray);
    },[addressList, resetAddress, selectedAddress, updateAddress, handleDelete]);

    return (
        <SlidingContainer cardList={addressCards} sliderId={'address-slider'} style={{ color: '#fff', fontSize: 40 }} distance={200} />
    )
}
