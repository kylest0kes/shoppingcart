import { GET_CART_TOTAL } from './types'

export const getNumbers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_CART_TOTAL
        })
    }
}