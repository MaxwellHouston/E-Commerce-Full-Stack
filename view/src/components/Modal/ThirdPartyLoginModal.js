import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { loggedInStyle } from './modalStyles';

ReactModal.setAppElement('#root');


export function ThirdPartyLoginModal() {

    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 1000) 
    }, [])

    return(
        <ReactModal isOpen={true} style={loggedInStyle}>
            <p id='logged-in-modal-p'>Login Successful</p>
        </ReactModal>
    )
}