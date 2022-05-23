import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiAccount from '../../utilities/api/apiAccount';
import { LoadingWheel } from '../animated/LoadingWheel';
import { UserContext } from '../context/UserContext';

export function LogoutModal() {

    const navigate = useNavigate();

    const { clearUser } = useContext(UserContext);

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
        clearUser();
    }, [logout, clearUser])

    return (
            <LoadingWheel />
    )
}