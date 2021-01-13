import React from 'react';

import './style.css';

export default function CartItem(props) {
    const { name, price, amount, img } = props;

    return (
        <div class="checkout-summary">
            
            <div class="checkout-summary-item">
                <img src={img} alt="cart img"/>
                <div class="item-name">
                    <span>{name}</span>
                    <p><span class="title">Quantity: </span>{amount}</p>
                </div>
                <div class="item-price">
                    <p class="title">${price}</p>
                    <a href="#">Remove</a>
                </div>
            </div>
        </div>
    )
}
