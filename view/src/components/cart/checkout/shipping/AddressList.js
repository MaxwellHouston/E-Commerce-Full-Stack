import { useContext, useEffect } from "react"
import { AddressContext } from "../../../context/AddressContext";
import { AddressCard } from "./AddressCard";
import { ScrollBtn } from "./ScrollBtn";


export const AddressList = ({updateAddress, selectedAddress, resetAddress}) => {

    const { addressList, loadAddresses } = useContext(AddressContext);
    const container = document.getElementById('address-slider');
    
    const renderAddresses = () => {
        if(addressList.length === 0) return;
        let addressCards = addressList.map(address => <AddressCard key={address.id} address={address} updateAddress={updateAddress} selectedAddress={selectedAddress} />);
        return addressCards;
    };

    useEffect(() => {
        loadAddresses();
    },[loadAddresses]);

    const checkScroll = () => {
        if(container.scrollLeft <= 15) {
            hideLeftBtn();
        } else if (container.offsetWidth + container.scrollLeft >= container.scrollWidth - 15) {
            hideRightBtn();
        } else {
            showBtns();
        }
    };

    const hideLeftBtn = () => {
        const btn = document.getElementById(`scroll-btn-left`);
        btn.style.display='none';
    };

    const hideRightBtn = () => {
        const btn = document.getElementById(`scroll-btn-right`);
        btn.style.display='none';
    };

    const showBtns = () => {
        const leftBtn = document.getElementById(`scroll-btn-left`);
        const rightBtn = document.getElementById(`scroll-btn-right`);
        if(leftBtn.style.display === 'none')  leftBtn.style.display = 'block';
        if(rightBtn.style.display === 'none')  rightBtn.style.display = 'block';    
    };

    return (
        <div className="slider-container">
            <ScrollBtn container={container} direction={'left'} />
            <div id='address-slider' onScroll={checkScroll}> 
                <div className='address-card' id='address-card-0' onClick={resetAddress}>
                    <p>Create New Address</p>
                </div>
                {renderAddresses()}
            </div>
            <ScrollBtn container={container} direction={'right'} />
        </div>
    )
}