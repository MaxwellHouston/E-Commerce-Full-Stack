import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingWheel } from '../animated/LoadingWheel';
import { CartContext } from '../context/CartContext';

export function LoadCartModal() {

    const { cart, loadCart, checkCart } = useContext(CartContext);

    const navigate = useNavigate();



    useEffect(() => {
        checkCart();
    }, [checkCart]);

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    useEffect(() => {
        if(cart.id){
            setTimeout(() => {
                navigate('/homepage');
            }, 500); 
        }
    }, [navigate, cart]);

    return (
            <LoadingWheel />
    )
}