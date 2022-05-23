import { useCallback, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadingWheel } from '../animated/LoadingWheel';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

export function LoadingModal() {

    const { user, load } = useContext(UserContext);
    const { loadCart, checkCart } = useContext(CartContext);

    const navigate = useNavigate();
    const location = useLocation();

    const loadUser = useCallback ( 
        async () => {
            const user = await load();
            if(!user){
                console.log('Please Login');
                navigate(location.state || '/');
            } else {
                setTimeout(() => {
                    navigate('/load-cart');
                }, 500); 
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