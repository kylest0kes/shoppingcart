import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';

export const cartItemQuantity = (action, name) => {
    return (dispatch) => {
        dispatch({
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}