import { ADD_TO_CART, FETCH_TO_CART } from "../actions/actionTypes";

const initialState = {
    carts: [],
};

const cartReducer = (state= initialState,action) => {
    switch(action.type){
        case FETCH_TO_CART:
            return {...state,carts:[...state?.carts, action.payload]};
            default:
                return state;
    }
};
export default cartReducer;