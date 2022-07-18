import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existProd = state.cartItems.find((x) => x.id === item.id);
            
            if(existProd){
                const quantity = Number(existProd.quantity) + 1;
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.id === existProd.id ? {id: existProd.id, name: existProd.name, image: existProd.image, price: existProd.price, company: existProd.company, quantity} : x)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.CHANGE_QUANTITY:
            const prod = action.payload;

            const existItem = state.cartItems.find((x) => x.id === prod.id);

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.id === existItem.id ? prod : x)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, prod]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== action.payload)
            }
        case actionTypes.CART_RESET:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}