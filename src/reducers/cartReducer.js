import { ADD_ITEM_TO_CART, GET_CART_TOTAL } from "../actions/types";

const initialState = {
    cartTotal: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            return {
                cartTotal: state.cartTotal + 1
            }
        case GET_CART_TOTAL:
            return {
                ...state
            }
        default:
            return state;
    }
}