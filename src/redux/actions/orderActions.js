import * as actionTypes from '../constants/orderConstants';
import axiosInstance from '../../config';

export const getOrders = (query) => async (dispatch) => {
    try{
        const { data } = await axiosInstance.post('api/orders/get', query);
        
        dispatch({
            type: actionTypes.GET_ORDERS,
            payload: data
        })

    } catch (error){
        console.error(error);
    }
}

export const addOrder = (query) => async (dispatch) => {
    try{
        const { data } = await axiosInstance.post('api/orders/add', query);

        dispatch({
            type: actionTypes.ADD_ORDER,
            payload: data
        })

    } catch (error){

    }
}