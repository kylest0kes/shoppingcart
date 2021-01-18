import React from 'react';

import './style.css'

export default function CartSummary(props) {
    const { cartCost } = props
    
    return (
        <div>
            <div className="checkout-summary-details">
                <div className="left">
                    <p><strong>Total:</strong></p>
                </div>
                <div className="right">
                    <p>${cartCost}</p>
                </div>
            </div>
        </div>

    )
}
