import React from 'react'
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import CartSummary from '../components/CartSummary';
import Button from '../components/Button';

export default function Cart() {
    return (
        <div className="checkout-summary" style={cartStyle}>
            <CartTotal />
            <CartItem />
            <CartSummary />
            <Button />
        </div>
    )
}

const cartStyle = {
    display: "block",
    margin: "20px auto"
}
