import React from 'react'
import { connect } from 'react-redux';

import CartTotal from '../components/CartTotal';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

function Cart({ cartProps }) {
    console.log(cartProps)    
    let itemsInCart = [];

    Object.keys(cartProps.items).forEach( (item) => {
        console.log(item);
        if(cartProps.items[item].inCart) {
            itemsInCart.push(cartProps.items[item])
        } 
    });

    console.log(itemsInCart)
 
    itemsInCart = itemsInCart.map( (item, index) => {
        // console.log(index)
        return (
            <div>
                <CartItem 
                    key={index}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    img={item.img}
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

export default connect(mapStateToProps )(Cart)


