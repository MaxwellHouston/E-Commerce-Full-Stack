import { useNavigate } from 'react-router-dom';
import apiAccount from '../../utilities/api/apiAccount';
import ReactModal from 'react-modal';
import { deleteUserStyle } from './modalStyles';

export function DeleteModal({clearUser}) {

    const navigate = useNavigate();

    const deleteAccount = () => {
        apiAccount.deleteAccount();
        clearUser();
        navigate('/');         
    };

    const stopDelete = () => {
        navigate(-1);
    };

    return (
        <ReactModal isOpen={true} style={deleteUserStyle}>
            <p id='delete-user-modal-p'>Are you sure you want to delete your account?</p>
            <button onClick={deleteAccount} id='delete-user-modal-btn'>Yes</button>
            <button onClick={stopDelete} id='delete-user-modal-btn'>No</button>
        </ReactModal>
    )
}