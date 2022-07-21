import ReactModal from 'react-modal';
import { alertStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export const LocalLoginModal = (show) => {
    return(
        <ReactModal isOpen={show} onAfterClose={null} style={alertStyle}>
            <p id='alert-modal-p'>Login Successful</p>
        </ReactModal>
    )
}