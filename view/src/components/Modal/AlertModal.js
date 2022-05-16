import { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { alertStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function AlertModal({show, close, modalMessage, callback}) {

    const [message, setMessage] = useState('');

    const runCallBack = () => {
        callback && callback();
    }

    const handleMessage = useCallback( () => {
        if(typeof(modalMessage) === 'string'){
            setMessage(modalMessage);
        } else {
            if(!modalMessage.data.details){
                setMessage(modalMessage.data.message);
            } else {
                let errorAlert = modalMessage.data.details.body[0].message;
                let rawErrorType = errorAlert.match(/".*"/)[0];
                let errorType = '';
                switch(rawErrorType) {
                    case '"first_name"':
                        errorType = 'First Name';
                        break;
                    case '"last_name"':
                        errorType = 'Last Name';
                        break;
                    case '"email"':
                        errorType = 'Email';
                        break;
                    case '"password"':
                        errorType = 'Password';
                        break;
                    default:
                        errorType = rawErrorType;
                        break;
                }
                setMessage(errorAlert.replace(rawErrorType, errorType))
            }
        }
    }, [modalMessage])

    useEffect(() => {
        handleMessage();
    },[handleMessage])

    return(
        <ReactModal isOpen={show} onAfterClose={ runCallBack } style={alertStyle}>
            <p id='alert-modal-p'>{message}</p>
            <button id='alert-modal-button' onClick={close}>Close</button>
        </ReactModal>
    )
}