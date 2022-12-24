import { ActionTypes } from "../types/actionTypes"
export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) =>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}

export const addCart = (product, number, size) =>{
    return {
        type: ActionTypes.ADD_TO_CART,
        payload:{ product, number, size}
    }
}

export const deleteFromCart = (product, size) =>{
    return {
        type: ActionTypes.DELETE_FROM_CART,
        payload: {product, size}
    }
}
export const setCategoriesProducts = (products) =>{
    return {
        type: ActionTypes.SET_CATEGORIES_PRODUCTS,
        payload: products
    }
}



