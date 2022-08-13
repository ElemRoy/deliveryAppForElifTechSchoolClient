import './Orders.css'

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getOrders } from '../redux/actions/orderActions';

function Orders(props) {
    const [_name, setName] = useState('');
    const [_email, setEmail] = useState('');
    const [_phone, setPhone] = useState('');
    const [_address, setAddress] = useState('');
    const [_orderId, setOrderId] = useState('');

    const dispatch = useDispatch();

    const orderList = useSelector(state => state.orders);
    const { orders } = orderList;

    const getQuery = () => {
        const json = {
            buyer: _name === '' ? undefined : _name,
            email: _email === '' ? undefined : _email,
            phone: _phone === '' ? undefined : _phone,
            address: _address === '' ? undefined : _address,
            _id: _orderId === '' ? undefined : _orderId
        }
        const stringified = JSON.stringify(json);
        return(JSON.parse(stringified));
    }

    const search = (event) => {
        if(Object.keys(getQuery()).length === 0) { dispatch(getOrders(getQuery())); }
    }

    const getPrice = (products) => {
        let price = 0;
    
        products.map((product) => price = price + product.price * product.quantity);
    
        return price;
      }

    return (
        <div class='container columnContainer'>
            <div class='childContainer columnChildContainer'>
                <h1>Enter one or more of these fields:</h1>
                <h1>Name</h1>
                <input value={_name} onInput={e => setName(e.target.value)} class="input ordersInput"></input>
                <h1>Email</h1>
                <input value={_email} onInput={e => setEmail(e.target.value)} class="input ordersInput"></input>
                <h1>Phone</h1>
                <input value={_phone} onInput={e => setPhone(e.target.value)} class="input ordersInput"></input>
                <h1>Address</h1>
                <input value={_address} onInput={e => setAddress(e.target.value)} class="input ordersInput"></input>
                <h1>Order id</h1>
                <input value={_orderId} onInput={e => setOrderId(e.target.value)} class="input ordersInput"></input>
                <button onClick={search}>Search</button>
            </div>
            <div class='childContainer'>
                {orders.map((order) => {
                    return(
                    <div class='order'>
                        <h1>Order id: {order._id} | Total price: {getPrice(order.products)} | Name: {order.buyer} | Email: {order.email} | Phone: {order.phone}</h1>
                        <div class='orderProducts'>
                            {order.products.map((product) => {
                                return(
                                <div class='cartProduct orderProduct'>
                                    <img src={product.image}></img>
                                    <div class='productInfo'>
                                        <p>{product.name}: {product.price}$</p>
                                        <p>Count: {product.quantity}</p>
                                        <p>Final price: {product.quantity * product.price}$</p>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default Orders;
