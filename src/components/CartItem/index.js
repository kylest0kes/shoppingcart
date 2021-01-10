import React from 'react';

import './style.css';

export default function CartItem() {
    return (
        <div className="checkout-summary-item">
            <img src="https://placeimg.com/100/80/any"/>
            <div className="item-name">
                <span>Comfy Knit Blazer</span>
            </div>
            <div className="item-price">
                <p className="title">$24.99</p>
                <a href="#">Remove</a>
            </div>
        </div>
    )
}
