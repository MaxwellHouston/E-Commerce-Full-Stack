import { useCallback, useContext, useEffect, useState } from "react"
import apiOrders from "../../utilities/api/apiOrders";
import { UserContext } from "../context/UserContext"
import { OrderCard } from "./OrderCard";

export const OrdersPage = () => {

    const [orders, setOrders] = useState([]);

    const {user} = useContext(UserContext);

    const fetchOrders = useCallback( async () => {
        const userOrders = await apiOrders.getUserOrders();
        setOrders(userOrders);
    },[]);

    useEffect(() => {
        fetchOrders()
    }, [fetchOrders]);

    const renderOrders = () => {
        if(orders.length === 0) return;
        let orderCards = orders.map(order => <OrderCard key={order.id} orderId={order.id} />);
        return orderCards;
    };
    
    return(
        <div className="orders-page">
            <h1>{/*user.first_name*/}Max's Orders</h1>
            <ul className="orders-list">
                {renderOrders()}
            </ul>
        </div>
    )
}