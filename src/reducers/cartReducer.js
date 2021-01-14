import { ADD_ITEM_TO_CART, GET_CART_TOTAL } from "../actions/types";
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpeg';
import product4 from '../images/product4.jpeg';
import product5 from '../images/product5.jpeg';
import product6 from '../images/product6.jpeg';
import product7 from '../images/product7.jpg';
import product8 from '../images/product8.jpeg';
import product9 from '../images/product9.jpeg';
import product10 from '../images/product10.jpeg';



const initialState = {
    cartTotal: 0,
    cartCost: 0,
    items: {
        basicBlackTee: {
            name: "Basic Black Tee",
            price: 7.99,
            amount: 0,
            img: product1,
            inCart: false
        },
        basicGraySweatshirt: {
            name: "Basic Gray Sweatshirt",
            price: 11.99,
            amount: 0,
            img: product2,
            inCart: false
        },
        basicBlueHoodie: {
            name: "Basic Blue Hoodie",
            price: 17.99,
            amount: 0,
            img: product3,
            inCart: false
        },
        blueDenim: {
            name: "Blue Denim",
            price: 23.99,
            amount: 0,
            img: product4,
            inCart: false
        },
        grayLongsleeveButtonUp: {
            name: "Gray Longsleeve Button-up",
            price: 14.99,
            amount: 0,
            img: product5,
            inCart: false
        },
        blackSweatpants: {
            name: "Black Sweatpants",
            price: 13.99,
            amount: 0,
            img: product6,
            inCart: false
        },
        basicRedSweatshirt: {
            name: "Basic Red Sweatshirt",
            price: 11.99,
            amount: 0,
            img: product7,
            inCart: false
        },
        codingShirt: {
            name: "Coding Shirt",
            price: 9.99,
            amount: 0,
            img: product8,
            inCart: false
        },
        blackChinos: {
            name: "Black Chinos",
            price: 21.99,
            amount: 0,
            img: product9,
            inCart: false
        },
        codingHoodie: {
            name: "codingHoodie",
            price: 19.99,
            amount: 0,
            img: product10,
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