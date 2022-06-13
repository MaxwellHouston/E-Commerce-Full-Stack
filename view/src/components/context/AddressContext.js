import { createContext, useCallback, useState } from "react";
import apiAccount from "../../utilities/api/apiAccount";

export const AddressContext = createContext();

export const AddressProvider = ({children}) => {

    const [addressList, setAddressList] = useState([]);

    const loadAddresses = useCallback( 
        async () => {
            const userAddresses = await apiAccount.fetchAddresses();
            if(userAddresses.status) return;
            setAddressList(userAddresses);
        },[]
    );

    const validateAddress = async (address) => {
        let validationResult = await apiAccount.validateAddress(address);
        if(validationResult.message) return validationResult.message;
        return validationResult;
    };

    const saveAddress = async (newAddress) => {
        let creationResult = await apiAccount.createAddress(newAddress);
        if(creationResult.id){
            loadAddresses();
            return creationResult;
        } else {
            console.log(creationResult);
            return false
        }
    };

    const updateAddress = async (updatesObject, addressId) => {
        let updateResult = await apiAccount.updateAddress(updatesObject, addressId);
        return updateResult;
    }

    const clearAddressList = useCallback( 
        () => { setAddressList([]) }, []
    );

    return (
        <AddressContext.Provider value={{addressList: addressList, loadAddresses: loadAddresses, validateAddress: validateAddress, updateAddress: updateAddress, saveAddress: saveAddress, clearAddressList: clearAddressList}}>
            {children}
        </AddressContext.Provider>
    )
};