
export const OrderShipping = ({address}) => {

    return(
        <div className="order-shipping">
            <h2>Shipping Address:</h2>
            <div className="order-shipping-address">
                <p>{address.street}</p>
                <p>{address.city} {address.state} </p>
                <p>{address.zip}</p>
            </div>
            <div className="order-shipping-info">
                <h2 className='order-additional-info'>Shipping instructions:</h2>
                {address.comments ? <textarea value={address.comments} readOnly /> : <textarea value={'N/A'} readOnly></textarea>}
            </div>
        </div>
    )
}