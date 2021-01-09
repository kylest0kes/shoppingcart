import React from 'react';
import { connect } from "react-redux";
import { addToCart } from '../../actions/addAction';

import './style.css';

const StoreItem = (props) => {
    console.log(props);
    const { addToCart } = props;
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

export default connect(null, { addToCart }) (StoreItem)
