import React from 'react';
import { connect } from "react-redux";
import { addToCart } from '../../actions/addAction';

import './style.css';

const StoreItem = (props) => {
    const { addToCart, image, name, description, price, refName } = props;
    return ( 
        <div className="card card-product">
            <div className="card-product-img-wrapper">
                <span onClick={() => addToCart(refName)} className="button expanded">Add to Cart</span>
                <span><img src={image} alt="product-img" className="product-img"/></span>
            </div>
            <div className="card-section">
                <span><h3 className="card-product-name">{name}</h3></span>
                <h5 className="card-product-price">${price}</h5>
                <p className="card-product-description">{description}</p>
            </div>
        </div>
    )
}

export default connect(null, { addToCart }) (StoreItem)
