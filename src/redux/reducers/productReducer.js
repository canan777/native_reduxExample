import { FETCH_TO_PRODUCT } from "../actions/actionTypes";

const initialState ={
    product: [],
};

const productReducer = (state = initialState,action) => {
   switch (action.type){
    case FETCH_TO_PRODUCT:
        return {...state, products: action?.payload};
        default:
            return state;
   }
};
   
export default productReducer;