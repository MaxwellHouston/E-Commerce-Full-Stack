import ReactModal from 'react-modal';
import { useEffect } from 'react';
ReactModal.setAppElement('#root');

export function LoggedInModal() {

    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 1000)
    }, [])

    return(
        <ReactModal isOpen={true} id='logged-in-modal'>
            <p>Login successful</p>
        </ReactModal>
    )
}