import { useNavigate } from 'react-router-dom';
import ReactModal from 'react-modal';
import { deleteUserStyle } from './modalStyles';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { AddressContext } from '../context/AddressContext';
import { SearchContext } from '../context/SearchContext';
import { CartContext } from '../context/CartContext';

export function DeleteModal() {

    const navigate = useNavigate();

    const { deleteUser } = useContext(UserContext);
    const { clearAddressList } = useContext(AddressContext);
    const { clearSearch } = useContext(SearchContext);
    const { clearCart } = useContext(CartContext);

    const deleteAccount = () => {
        deleteUser();
        clearAddressList();
        clearSearch();
        clearCart();
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