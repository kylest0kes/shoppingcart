import React from 'react';

import './style.css'

export default function CartSummary() {
    return (
        <div class="checkout-summary-details">
            <div class="left">
            <p><strong>Subtotal:</strong></p>
            <p><strong>Tax:</strong></p>
            <p><strong>Total:</strong></p>
            </div>
            <div class="right">
            <p>$10.99</p>
            <p>$2.00</p>
            <p>$12.99</p>
            </div>
        </div>

    )
}
