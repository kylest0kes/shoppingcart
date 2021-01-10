import React from 'react'
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import CartSummary from '../components/CartSummary'

export default function Cart() {
    return (
        <div className="checkout-summary">
            <CartTotal />
            <CartItem />
            <CartSummary />
        </div>
    )
}
