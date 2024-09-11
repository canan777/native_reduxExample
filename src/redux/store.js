import { combineReducers, legacy_createStore } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

//* store oluşturmak için kullanırız.
const store = legacy_createStore(
//* reducerları birleştirmek için combineReducers kullanırız.
    combineReducers({
        cart: cartReducer,
        product: productReducer,
    }),
);

export default store;