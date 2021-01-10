import React from 'react';

import './style.css';

export default function CartItem() {
    return (
        <div class="checkout-summary-item">
            <img src="https://placeimg.com/100/80/any"/>
            <div class="item-name">
            <a>Comfy Knit Blazer</a>
            <p><span class="title">Color: </span>Blue</p>
            <p><span class="title">Size: </span>M</p>
            </div>
            <div class="item-price">
            <p class="title">$24.99</p>
            <a href="#">Remove</a>
            </div>
        </div>
    )
}
