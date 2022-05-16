import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { noUserStyle } from './modalStyles';
import { useNavigate } from 'react-router-dom';

ReactModal.setAppElement('#root');


export function NoUserModal() {

    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    return(
        <ReactModal isOpen={true} style={noUserStyle}>
            <p id='no-user-modal-p'>Please create an account or log in to access this page</p>
            <button id='no-user-modal-btn' onClick={backBtn}>Back</button>
        </ReactModal>
    )
}