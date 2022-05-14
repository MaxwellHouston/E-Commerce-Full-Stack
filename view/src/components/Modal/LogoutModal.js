import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiAccount from '../../utilities/api/apiAccount';
import { LoadingWheel } from '../animated/LoadingWheel';

export function LogoutModal({clearUser}) {

    const navigate = useNavigate();

    const logout = useCallback ( 
        async () => {
            const logoutMessage = await apiAccount.logout();           
            console.log(logoutMessage);
            setTimeout(() => {
                navigate('/');
            }, 1000); 
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