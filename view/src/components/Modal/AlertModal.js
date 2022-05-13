import ReactModal from 'react-modal';
import { alertStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function AlertModal({show, close, message, callback}) {

    const runCallBack = () => {
        callback && callback();
    }
/*
    const handleMessage = () => {
        console.log(message);
        if(typeof(message) === 'string') return message;

    }
*/

    return(
        <ReactModal isOpen={show} onAfterClose={ runCallBack } style={alertStyle}>
            <p id='alert-modal-p'>{message}</p>
            <button id='alert-modal-button' onClick={close}>Close</button>
        </ReactModal>
    )
}