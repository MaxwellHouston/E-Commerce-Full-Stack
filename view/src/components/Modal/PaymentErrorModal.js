import ReactModal from 'react-modal';
import { alertStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function PaymentErrorModal({show, close, modalMessage}) {

    return(
        <ReactModal isOpen={show} style={alertStyle}>
            <p id='alert-modal-p'>{modalMessage}</p>
            <button id='alert-modal-button' onClick={close}>Close</button>
        </ReactModal>
    )
}