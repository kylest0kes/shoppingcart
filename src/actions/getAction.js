import { GET_CART_TOTAL } from './types'

export const getNumbers = () => {
    return (dispatch) => {
        console.log('getting all cart items');
        dispatch({
            type: GET_CART_TOTAL
        })
    }
}