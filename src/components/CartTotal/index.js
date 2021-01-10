import React from 'react';

import './style.css';

export default function CartTotal(props) {
    const { cartTotal } = props; 
    return (
        <div class="checkout-summary-title">
                <h5>Your Order</h5>
                <h5>{cartTotal} Items</h5>
            </div>
    )
}
