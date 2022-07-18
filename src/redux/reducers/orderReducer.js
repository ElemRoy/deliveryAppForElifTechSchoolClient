import * as actionTypes from '../constants/orderConstants';

export const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type){
        case actionTypes.ADD_ORDER:
            return {
                message: action.payload
            }
        case actionTypes.GET_ORDERS:
            return {
                orders: action.payload
            };
        default:
            return state;
    }
}