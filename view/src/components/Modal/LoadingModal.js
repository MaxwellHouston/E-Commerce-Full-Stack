import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiAccount from '../../utilities/api/apiAccount';
import { LoadingWheel } from '../animated/LoadingWheel';

export function LoadingModal({storeUser}) {

    const navigate = useNavigate();
    const location = useLocation();

    const loadUser = useCallback ( 
        async () => {
            const user = await apiAccount.fetchUser();
            if(user.status){
                console.log('Please Login');
                navigate(location.state || '/');
            } else {
                storeUser(user);
                setTimeout(() => {
                    navigate('/homepage');
                }, 1000); 
            }
        }, [storeUser, navigate, location.state]
    )

    useEffect(() => {
        loadUser();
    }, [loadUser, navigate])

    return (
            <LoadingWheel />
    )
}