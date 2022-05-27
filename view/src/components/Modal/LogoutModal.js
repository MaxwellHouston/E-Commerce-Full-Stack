import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiAccount from '../../utilities/api/apiAccount';
import { LoadingWheel } from '../animated/LoadingWheel';
import { AddressContext } from '../context/AddressContext';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

export function LogoutModal() {

    const navigate = useNavigate();

    const { clearUser } = useContext(UserContext);
    const { clearAddressList } = useContext(AddressContext);
    const { clearCart } = useContext(CartContext);

    const logout = useCallback ( 
        async () => {
            const logoutMessage = await apiAccount.logout();           
            console.log(logoutMessage);
            setTimeout(() => {
                navigate('/');
            }, 500); 
        }, [navigate]
    )

    useEffect(() => {
        logout();
        clearCart();
        clearAddressList();
        clearUser();
    }, [logout, clearUser, clearCart, clearAddressList])

    return (
            <LoadingWheel />
    )
}