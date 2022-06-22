import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiAccount from '../../utilities/api/apiAccount';
import { LoadingWheel } from '../animated/LoadingWheel';
import { AddressContext } from '../context/AddressContext';
import { CartContext } from '../context/CartContext';
import { SearchContext } from '../context/SearchContext';
import { UserContext } from '../context/UserContext';

export function LogoutModal() {

    const navigate = useNavigate();

    const { clearUser } = useContext(UserContext);
    const { clearAddressList } = useContext(AddressContext);
    const { clearCart } = useContext(CartContext);
    const { clearSearch } = useContext(SearchContext);

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
        clearSearch();
    }, [logout, clearUser, clearCart, clearAddressList, clearSearch])

    return (
            <LoadingWheel />
    )
}