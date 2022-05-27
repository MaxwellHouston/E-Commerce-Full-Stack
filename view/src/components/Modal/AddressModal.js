import { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import { AddressContext } from '../context/AddressContext';
import { addressValidationStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function AddressModal({show, close, address, updateAddress}) {

    const [message, setMessage] = useState('Validating...');
    const [validatedAddress, setValidatedAddress] = useState(null);

    const { validateAddress, saveAddress } = useContext(AddressContext);
    
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

    const save = async (e) => {
        let saveResponse = await saveAddress(validatedAddress);
        if(saveResponse) {
            setMessage('Address Saved');
            updateAddress(saveResponse);
            back(e);
        } else {
            setMessage('Save failed');
        }
    };

    const back = (e) => {
        setMessage('Validating');
        setValidatedAddress(null);
        close(e);
    }
    
    return(
        <ReactModal className='address-modal' isOpen={show} onAfterOpen={handleValidation} style={ addressValidationStyle } >
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
                { validatedAddress && <button id='alert-modal-button' onClick={save}>Save</button>}
            </div>

        </ReactModal>
    )
}