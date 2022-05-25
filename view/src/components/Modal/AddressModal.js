import { useState } from 'react';
import ReactModal from 'react-modal';
import apiAccount from '../../utilities/api/apiAccount';
import { AddressCard } from '../cart/checkout/shipping/AddressCard';
ReactModal.setAppElement('#root');

export function AddressModal({show, close, updateAddress}) {

    const [addressList, setAddressList] = useState([]);

    const loadAddresses = async () => {
        const userAddresses = await apiAccount.fetchAddresses();
        if(userAddresses.status) return;
        setAddressList(userAddresses);
    };

    const renderAddresses = () => {
        if(addressList.length === 0){
            return (
                <div className='address-card'>
                    <p>No addresses saved</p>
                </div>
            );
        };
        let addressCards = addressList.map(address => <AddressCard key={address.id} address={address} updateAddress={updateAddress} close={close} />);
        return addressCards;
    };

    return(
        <ReactModal isOpen={show} onAfterOpen={loadAddresses}>
            <div className='address-card-container'>
                {renderAddresses()}
            </div>
            <p>Manage Addresses</p>
            <button id='alert-modal-button' onClick={close}>Close</button>
        </ReactModal>
    )
}