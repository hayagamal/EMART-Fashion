import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,categoryReducer} from "./productReducer";
import {userReducer} from './userReducer'
import handleCart from './cartReducer';
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: handleCart,
    category: categoryReducer,
    user: userReducer
   
    

})

export default reducers