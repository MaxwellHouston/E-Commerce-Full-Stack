import { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import { AddressContext } from '../context/AddressContext';
import { addressValidationStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function AddressVerificationModal({show, close, updateFunction, addressFunction, address, onCloseFunction}) {

    const [message, setMessage] = useState('Validating...');
    const [validatedAddress, setValidatedAddress] = useState(null);

    const { validateAddress } = useContext(AddressContext);
    
    const handleValidation = async () => {
        const validationResult = await validateAddress(address);
        if(typeof validationResult === 'string'){
            setMessage(validationResult);
        } else {
            setMessage('Save this address?')
            validationResult.comments = address.comments;
            setValidatedAddress(validationResult);
        }
    };

    const handleUpdateFunction = () => {
        const response = addressFunction();
        if(response){
            setMessage(response);
            back();
        } else {
            setMessage('Save failed');
        }
    };

    const handleAddressFunction = () => {
        const response = addressFunction(validatedAddress);
        if(response){
            setMessage(response);
            back();
        } else {
            setMessage('Save failed');
        }
    };

    const back = () => {
        setMessage('Validating...');
        setValidatedAddress(null);
        close();
    };
    
    return(
        <ReactModal className='address-modal' isOpen={show} onAfterOpen={handleValidation} onAfterClose={onCloseFunction} style={addressValidationStyle} >
            <h2>{message}</h2>
            { validatedAddress && (
                <div className='valid-address-card'>
                    <p>{validatedAddress.street}</p>
                    <p>{validatedAddress.city}</p>
                    <p>{validatedAddress.state}</p>
                    <p>{validatedAddress.zip}</p>
                </div>)
            }
            <div className='address-modal-btns'>
                <button id='alert-modal-button' onClick={back}>Back</button>
                { validatedAddress && <button id='alert-modal-button' onClick={ updateFunction ? handleUpdateFunction : handleAddressFunction}>Save</button>}
            </div>

        </ReactModal>
    )
}