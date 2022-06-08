
export const OrderCardHeader = ({order}) => {

    const formatDate = () => {
        let date = order.created.slice(0,10);
        return date;
    }

    return(
        <div className="order-card-header">
            <div className="order-header-container">
                <p className="order-header-title">Order Number:</p>
                <p>{order.id}</p>
            </div>
            <div className="order-header-container">
                <p className="order-header-title">Total:</p>
                <p>{order.total_price}</p>
            </div>
            <div className="order-header-container">
                <p className="order-header-title">Status:</p>
                <p>{order.status}</p>
            </div>
            <div className="order-header-container">
                <p className="order-header-title">Order Created:</p>
                <p>{formatDate()}</p>
            </div>
        </div>
    )
}