import React from 'react';

import './style.css';

export default function CartItem(props) {
    console.log(props)
    const { name, price, amount, img } = props;

    return (
        <div class="checkout-summary">
            
            <div class="checkout-summary-item">
                <img className="cart-item-img" src={img} alt="cart img"/>
                <div className="item-name">
                    <span>{name}</span>
                    <p>
                        <button className="quantity-btns"><i className="fas fa-minus-square"></i></button>
                        <span className="title">Quantity: </span>{amount}
                        <button className="quantity-btns"><i className="fas fa-plus-square"></i></button>
                    </p>
                </div>
                <div className="item-price">
                    <p className="title">${price}</p>
                    <a href="#">Remove</a>
                </div>
            </div>
        </div>
    )
}
