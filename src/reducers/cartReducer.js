import { ADD_ITEM_TO_CART, GET_CART_TOTAL, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_ITEM } from "../actions/types";
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
            refName: "basicBlackTee",
            price: 7.99,
            amount: 0,
            img: product1,
            inCart: false
        },
        basicGraySweatshirt: {
            name: "Basic Gray Sweatshirt",
            refName: "basicGraySweatshirt",
            price: 11.99,
            amount: 0,
            img: product2,
            inCart: false
        },
        basicBlueHoodie: {
            name: "Basic Blue Hoodie",
            refName: "basicBlueHoodie",
            price: 17.99,
            amount: 0,
            img: product3,
            inCart: false
        },
        blueDenim: {
            name: "Blue Denim",
            refName: "blueDenim",
            price: 23.99,
            amount: 0,
            img: product4,
            inCart: false
        },
        grayLongsleeveButtonUp: {
            name: "Gray Longsleeve Button-up",
            refName: "grayLongsleeveButtonUp",
            price: 14.99,
            amount: 0,
            img: product5,
            inCart: false
        },
        blackSweatpants: {
            name: "Black Sweatpants",
            refName: "blackSweatpants",
            price: 13.99,
            amount: 0,
            img: product6,
            inCart: false
        },
        basicRedSweatshirt: {
            name: "Basic Red Sweatshirt",
            refName: "basicRedSweatshirt",
            price: 11.99,
            amount: 0,
            img: product7,
            inCart: false
        },
        codingShirt: {
            name: "Coding Shirt",
            refName: "codingShirt",
            price: 9.99,
            amount: 0,
            img: product8,
            inCart: false
        },
        blackChinos: {
            name: "Black Chinos",
            refName: "blackChinos",
            price: 21.99,
            amount: 0,
            img: product9,
            inCart: false
        },
        codingHoodie: {
            name: "codingHoodie",
            refName: "codingHoodie",
            price: 19.99,
            amount: 0,
            img: product10,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let itemSelected = "";
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            itemSelected = { ...state.items[action.payload]}
            itemSelected.amount += 1;
            itemSelected.inCart = true;
            console.log(itemSelected)
            return {
                ...state,
                cartTotal: state.cartTotal + 1,
                cartCost: state.cartCost + state.items[action.payload].price,
                items: {
                    ...state.items,
                    [action.payload]: itemSelected
                }
            }
        case GET_CART_TOTAL:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            itemSelected = { ...state.items[action.payload]}
            itemSelected.amount += 1;
            return {
                ...state,
                cartTotal: state.cartTotal + 1,
                cartCost: state.cartCost + state.items[action.payload].price,
                items: {
                    ...state.items,
                    [action.payload]: itemSelected
                }
            }
        case DECREASE_QUANTITY:
            itemSelected = { ...state.items[action.payload]};
            let newCartCost = 0;
            let newCartTotal = 0;

            if(itemSelected.amount === 0) {
                itemSelected.amount = 0;
                newCartCost = state.cartCost;
                newCartTotal = state.cartTotal;
            } else {
                itemSelected.amount -= 1;
                newCartCost = state.cartCost - state.items[action.payload].price;
                newCartTotal = state.cartTotal - 1;
            }
            return {
                ...state,
                cartCost: newCartCost,
                cartTotal: newCartTotal,
                items: {
                    ...state.items,
                    [action.payload]: itemSelected
                }
            }
        case CLEAR_ITEM:
            itemSelected = { ...state.items[action.payload]};    
            let prevItemAmount = itemSelected.amount;
            itemSelected.amount = 0;
            itemSelected.inCart = false;
            return {
                ...state,
                cartTotal: state.cartTotal - prevItemAmount,
                cartCost: state.cartCost - (prevItemAmount * itemSelected.price),
                items: {
                    ...state.items,
                    [action.payload]: itemSelected
                }
            }
        default:
            return state;
    }
}