import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNumbers } from '../../actions/getAction'

import './style.css'

const Header = (props) => {
    const { cartProps } = props;

    useEffect(() => {
        getNumbers();
    }, [])
    return (
        <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline">PushCart</h1>
            <ul className="subnav-hero-subnav">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart {cartProps.cartTotal}</Link></li>
            </ul>
      </header>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers }) (Header)

