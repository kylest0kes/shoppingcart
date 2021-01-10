import { ADD_ITEM_TO_CART, GET_CART_TOTAL } from "../actions/types";

const initialState = {
    cartTotal: 0,
    cartCost: 0,
    items: {
        basicBlackTee: {
            name: "Basic Black Tee",
            price: 7.99,
            amount: 0,
            inCart: false
        },
        basicGraySweatshirt: {
            name: "Basic Gray Sweatshirt",
            price: 11.99,
            amount: 0,
            inCart: false
        },
        basicBlueHoodie: {
            name: "Basic Blue Hoodie",
            price: 17.99,
            amount: 0,
            inCart: false
        },
        blueDenim: {
            name: "Blue Denim",
            price: 23.99,
            amount: 0,
            inCart: false
        },
        grayLongsleeveButtonUp: {
            name: "Gray Longsleeve Button-up",
            price: 14.99,
            amount: 0,
            inCart: false
        },
        blackSweatpants: {
            name: "Black Sweatpants",
            price: 13.99,
            amount: 0,
            inCart: false
        },
        basicRedSweatshirt: {
            name: "Basic Red Sweatshirt",
            price: 11.99,
            amount: 0,
            inCart: false
        },
        codingShirt: {
            name: "Coding Shirt",
            price: 9.99,
            amount: 0,
            inCart: false
        },
        blackChinos: {
            name: "Black Chinos",
            price: 21.99,
            amount: 0,
            inCart: false
        },
        codingHoodie: {
            name: "codingHoodie",
            price: 19.99,
            amount: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            let addQuantity = { ...state.items[action.payload]}
            addQuantity.amount += 1;
            addQuantity.inCart = true;
            console.log(addQuantity)
            return {
                ...state,
                cartTotal: state.cartTotal + 1,
                cartCost: state.cartCost + state.items[action.payload].price,
                items: {
                    ...state.items,
                    [action.payload]: addQuantity
                }
            }
        case GET_CART_TOTAL:
            return {
                ...state
            }
        default:
            return state;
    }
}