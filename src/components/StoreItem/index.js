import React, { useState } from 'react';

import './style.css';

export default function StoreItem() {
    const [cartNumber, setCartNumber] = useState(0);

    const addToCart = () => {
        setCartNumber(cartNumber + 1)
    }     
    console.log(cartNumber)
    return (
        
        <div className="card card-product">
            <div className="card-product-img-wrapper">
                <a onClick={addToCart} className="button expanded">Add to Cart</a>
                <a onClick={addToCart} href="#"><img src="https://placeimg.com/75/90/any"/></a>
            </div>
            <div className="card-section">
                <a onClick={addToCart} href="#"><h3 className="card-product-name">Kickin with Kraken Tee</h3></a>
                <h5 className="card-product-price">$19.99</h5>
                <p className="card-product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere sem enim, accumsan convallis risus semper. </p>
            </div>
        </div>
    )
}
