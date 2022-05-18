import { useCallback, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { alertStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function CartResponseModal({show, close, modalMessage}) {

    const [message, setMessage] = useState('');




    return(
        <ReactModal isOpen={show} style={alertStyle}>
            <p id='alert-modal-p'>{modalMessage}</p>
            <button id='alert-modal-button' onClick={close}>Close</button>
        </ReactModal>
    )
}