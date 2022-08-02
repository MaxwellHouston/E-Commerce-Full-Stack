import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { alertStyle } from './modalStyles';
ReactModal.setAppElement('#root');

export function CartResponseModal({show, close, modalMessage}) {

    const navigate = useNavigate();

    const toCart = () => {
        navigate('/account/cart');
        close();
    }

    const toShopping = () => {
        navigate(-1);
        close();
    }

    const renderActions = () => {
        if(modalMessage === 'Product already in cart'){
            return <button id='alert-modal-button' onClick={close}>Close</button>
        } else {
            return (
                <div className='product-added-options'>
                    <button id='alert-modal-button' onClick={toCart}>Go to cart</button>
                    <button id='alert-modal-button' onClick={toShopping}>Continue Shopping</button>
                </div>
            )
        }
    }


    return(
        <ReactModal isOpen={show} style={alertStyle}>
            <p id='alert-modal-p'>{modalMessage}</p>
            {renderActions()}
        </ReactModal>
    )
}