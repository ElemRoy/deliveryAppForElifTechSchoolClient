import * as actionTypes from '../constants/cartConstants';
import axiosInstance from '../../config';

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axiosInstance.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            company: data.company,
            quantity: 1
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const changeQuantity = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axiosInstance.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.CHANGE_QUANTITY,
        payload: {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            company: data.company,
            quantity
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const resetCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CART_RESET,
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}