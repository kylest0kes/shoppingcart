import { ADD_ITEM_TO_CART } from './types';

export const addToCart = (itemName) => {
    return (dispatch) => {
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: itemName
        })
    }
}