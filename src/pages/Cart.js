import React from 'react'
import { connect } from 'react-redux';
import { cartItemQuantity } from '../actions/cartItemQuantity';
import { clearItem } from '../actions/clearItem'


import CartTotal from '../components/CartTotal';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

function Cart({ cartProps, cartItemQuantity, clearItem }) {
    // console.log(cartProps)    
    let itemsInCart = [];

    Object.keys(cartProps.items).forEach( (item) => {
        // console.log(item);
        if(cartProps.items[item].inCart) {
            itemsInCart.push(cartProps.items[item])
        } 
    });

    console.log(itemsInCart)
 
    itemsInCart = itemsInCart.map( (item, index) => {
        // console.log(item)
        return (
            <div>
                <CartItem 
                    key={index}
                    name={item.name}
                    refName={item.refName}
                    price={item.price}
                    amount={item.amount}
                    img={item.img}
                    cartItemQuantity={cartItemQuantity}
                    clearItem={clearItem}
                />
            </div>
        )
    });

    return (
        <div className="checkout-summary" style={summaryStyle}>
            <CartTotal cartTotal={cartProps.cartTotal}/>
            { itemsInCart }
            <CartSummary cartCost={cartProps.cartCost.toFixed(2)} />
        </div>
    )    
}

const summaryStyle = {
    width: "50vw",
    display: "block",
    margin: "15px auto"
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { cartItemQuantity, clearItem } )(Cart)


