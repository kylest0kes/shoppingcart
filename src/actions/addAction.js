import { ADD_ITEM_TO_CART } from './types';

export const addToCart = () => {
    return (dispatch) => {
        console.log('added to cart');
        dispatch({
            type: ADD_ITEM_TO_CART
        })
    }
}