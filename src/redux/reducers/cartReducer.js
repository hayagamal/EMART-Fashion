import { ActionTypes } from "../types/actionTypes"

const cart =[];
const handleCart =(state = cart, action) =>{
 const product = action.payload;
 switch(action.type){
    case ActionTypes.ADD_TO_CART:
        const exist = state.find(x => x.id === product.product.id && x.size === product.size);
      
        if(exist){
            const subtotal = product.product.price;
            return state.map((x) => x.id === product.product.id && x.size === product.size? {...x, qty: x.qty + product.number, total: Math.round(subtotal + x.qty * x.price)} : x)
            
        }
        else{
            const product = action.payload;
            return [...state, {
                ...product.product,
                qty: product.number,
                size: product.size,
                total: product.product.price * product.number

            
            }]
        }
        break;
        case ActionTypes.DELETE_FROM_CART:
           
            const exist1= state.find(x => x.id === product.product.id && x.size === product.size);
            if(exist1.qty === 1){
                return state.filter (x=> x !== exist1);
            }
            else{
                return state.map((x)=>x.id === product.product.id && x.size === product.size? {...x, qty: x.qty-1, total: Math.round(x.total - x.price)}:x )
            }
            
        default: return state;

 }
}

export default handleCart;