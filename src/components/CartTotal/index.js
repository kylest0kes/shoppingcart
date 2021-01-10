import React from 'react';

import './style.css';

export default function CartTotal() {
    return (
        <div class="checkout-summary">
            <div class="checkout-summary-title">
                <h5>Your Order</h5>
                <h5>total Items</h5>
            </div>
            <div class="checkout-summary-item">
                <img src="https://placeimg.com/100/80/any"/>
                <div class="item-name">
                    <span>Product Title</span>
                    <p><span class="title">Quantity: </span>#</p>
                </div>
                <div class="item-price">
                    <p class="title">$price</p>
                    <a href="#">Remove</a>
                </div>
            </div>
            <div class="checkout-summary-details">
                <div class="left">
                    <p><strong>Total:</strong></p>
                </div>
                <div class="right">
                    <p>$total</p>
                </div>
            </div>
            <button class="button expanded checkout-btn">Proceed to Checkout</button>
        </div>
    )
}
