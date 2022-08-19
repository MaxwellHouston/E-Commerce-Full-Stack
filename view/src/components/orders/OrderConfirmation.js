import { useContext, useCallback, useEffect, useState } from "react";
import apiOrders from "../../utilities/api/apiOrders";
import { CartContext } from "../context/CartContext";
import { OrderInfo } from "./OrderInfo";
import { OrderProductList } from "./OrderProductList";

export const OrderConfirmation = () => {

    const [order, setOrder] = useState(null);
    const [orderStatus, setOrderStatus] = useState(false);
    const [orderTotal, setOrderTotal] = useState('');
    const [shippingAddress, setShippingAddress] = useState({});

    const {cart, deleteCart, } = useContext(CartContext);

    const submitOrder = useCallback( 
        async () => {
            const newOrderid = await apiOrders.submitOrder(cart.id);
            const newOrder = await apiOrders.getOrderById(newOrderid.order_id);
            setOrder(newOrder);
        }, [cart]
    );

    useEffect(() => {
        if(order) return;
        setOrderStatus(true);
    }, [order]);
        
    useEffect(() => {
        if(orderStatus){
            submitOrder();
            deleteCart(cart.id);
            setOrderStatus(false);
        }
    }, [submitOrder, orderStatus, deleteCart, cart]);

    useEffect(() => {
        const address = window.localStorage.getItem('ORDER_SHIPPING_ADDRESS');
        if(address) setShippingAddress(JSON.parse(address));
        const total = window.localStorage.getItem('ORDER_TOTAL');
        if(total) setOrderTotal(JSON.parse(total));
    }, [])

    return (
        <div className="order-confirmation">
            <h1>Order Confirmation</h1>
            <OrderProductList products={order && order.products} />
            <OrderInfo total={orderTotal} address={shippingAddress} />
        </div>
    )
}