import { useCallback, useEffect, useState } from "react"
import apiOrders from "../../utilities/api/apiOrders";
import { OrderCardHeader } from "./OrderCardHeader"
import { OrderProductList } from "./OrderProductList"

export const OrderCard = ({orderId}) => {
    const [order, setOrder] = useState({});

    const loadOrder = useCallback( async () => {
        const orderObject = await apiOrders.getOrderById(orderId);
        setOrder(orderObject);
        }, [orderId]
    );

    useEffect(() => {
        loadOrder();
    }, [loadOrder]);

    return(
        <li className="order-card">
            <OrderCardHeader order={order} />
            <OrderProductList products={order.products} />
        </li>
    )
}