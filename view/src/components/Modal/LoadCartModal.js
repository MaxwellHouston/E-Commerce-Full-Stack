import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingWheel } from '../animated/LoadingWheel';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

export function LoadCartModal() {

    const { cart, loadCart, checkCart } = useContext(CartContext);
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(!user.id){
            navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        checkCart();
    }, [checkCart]);

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    useEffect(() => {
        if(cart.id){
            navigate('/homepage');
        }
    }, [navigate, cart]);

    return (
            <LoadingWheel />
    )
}