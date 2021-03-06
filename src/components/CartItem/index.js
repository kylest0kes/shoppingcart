import React from 'react';

import './style.css';

export default function CartItem(props) {
    const { name, price, amount, img, cartItemQuantity, refName, clearItem } = props;

    return (
        <div className="checkout-summary">
            
            <div className="checkout-summary-item">
                <img className="cart-item-img" src={img} alt="cart img"/>
                <div className="item-name">
                    <span>{name}</span>
                    <p>
                        <button onClick={() => cartItemQuantity('decrease', refName)} className="quantity-btns"><i className="fas fa-minus-square"></i></button>
                        <span className="title">Quantity: </span>{amount}
                        <button onClick={() => cartItemQuantity('increase', refName)} className="quantity-btns"><i className="fas fa-plus-square"></i></button>
                    </p>
                </div>
                <div className="item-price">
                    <p className="title">${price * amount}</p>
                    <span className="remove-btn" onClick={() => clearItem(refName)}>Remove</span>
                </div>
            </div>
        </div>
    )
}
