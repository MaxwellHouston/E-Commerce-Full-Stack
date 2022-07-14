import { useCallback, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadingWheel } from '../animated/LoadingWheel';
import { UserContext } from '../context/UserContext';

export function LoadUserModal() {

    const { load } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();

    const loadUser = useCallback ( 
        async () => {
            const user = await load();
            if(!user){
                console.log('Please Login');
                navigate(location.state || '/');
            } else {
                navigate('/load-cart');
            }
        }, [load, navigate, location.state]
    );

    useEffect(() => {
        loadUser();
    }, [loadUser, navigate]);

    return (
        <LoadingWheel />
    )
}