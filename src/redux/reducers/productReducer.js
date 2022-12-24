import { initializeUseSelector } from "react-redux/es/hooks/useSelector"
import { ActionTypes } from "../types/actionTypes"

const intialState = {
    products: [],

}

export const productReducer = (state= intialState, action )=>{
switch (action.type){
case ActionTypes.SET_PRODUCTS:
    return {...state, products: action.payload}

default:
    return state
}

}

export const categoryReducer = (state = intialState, action) =>{
    switch(action.type){
        case ActionTypes.SET_CATEGORIES_PRODUCTS:
            return {...state, products: action.payload}
        default: return state
    }
    
}

export const selectedProductReducer = (state={}, action) =>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
            break;
        default : return state;
    }
}