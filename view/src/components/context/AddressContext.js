import { createContext, useCallback, useState } from "react";
import apiAddress from "../../utilities/api/apiAddress";

export const AddressContext = createContext();

export const AddressProvider = ({children}) => {

    const [addressList, setAddressList] = useState([]);

    const loadAddresses = useCallback( 
        async () => {
            const userAddresses = await apiAddress.fetchAddresses();
            if(userAddresses.status) return;
            setAddressList(userAddresses);
        },[]
    );

    const validateAddress = async (address) => {
        let validationResult = await apiAddress.validateAddress(address);
        if(validationResult.message) return validationResult.message;
        return validationResult;
    };

    const saveAddress = async (newAddress) => {
        let creationResult = await apiAddress.createAddress(newAddress);
        if(creationResult.id){
            loadAddresses();
            return creationResult;
        } else {
            console.log(creationResult);
            return false
        }
    };

    const updateAddress = async (updatesObject, addressId) => {
        let updateResult = await apiAddress.updateAddress(updatesObject, addressId);
        return updateResult;
    }

    const clearAddressList = useCallback( 
        () => { setAddressList([]) }, []
    );

    const deleteAddress = async (addressId) => {
        let deleteResult = await apiAddress.deleteAddress(addressId);
        if(deleteResult.status === 204){
            loadAddresses();
            return true;
        } else {
            return false;
        }
    };

    return (
        <AddressContext.Provider value={{
            addressList: addressList,
            loadAddresses: loadAddresses, 
            validateAddress: validateAddress, 
            updateAddress: updateAddress, 
            saveAddress: saveAddress, 
            clearAddressList: clearAddressList,
            deleteAddress: deleteAddress
        }}>
            {children}
        </AddressContext.Provider>
    )
};