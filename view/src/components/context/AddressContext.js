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
        let updateResult = await apiAccount.createAddress(newAddress);
        if(updateResult.id){
            loadAddresses();
            return updateResult;
        } else {
            console.log(updateResult);
            return false
        }
    };

    const clearAddressList = useCallback( 
        () => { setAddressList([]) }, []
    );

    return (
        <AddressContext.Provider value={{addressList: addressList, loadAddresses: loadAddresses, validateAddress: validateAddress, saveAddress: saveAddress, clearAddressList: clearAddressList}}>
            {children}
        </AddressContext.Provider>
    )
};