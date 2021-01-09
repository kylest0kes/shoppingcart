import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction'

import './style.css'

const Header = (props) => {
    console.log(props)
    const { cartProps } = props;

    useEffect(() => {
        getNumbers();
    }, [])
    return (
        <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline">PushCart</h1>
            <ul className="subnav-hero-subnav">
                <li><a href="#">Home</a></li>
                <li><a href="#" className="">About</a></li>
                <li><a href="#"><i className="fas fa-shopping-cart"></i> Cart {cartProps.cartTotal}</a></li>
            </ul>
      </header>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers }) (Header)

