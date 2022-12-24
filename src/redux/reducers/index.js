import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,categoryReducer} from "./productReducer";
import handleCart from './cartReducer';
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cart: handleCart,
    category: categoryReducer,
   
    

})

export default reducers