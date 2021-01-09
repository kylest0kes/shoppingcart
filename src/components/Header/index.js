import React from 'react';

import './style.css'

export default function Header() {
    return (
        <header className="subnav-hero-section">
            <h1 className="subnav-hero-headline">PushCart</h1>
            <ul className="subnav-hero-subnav">
                <li><a href="#">Home</a></li>
                <li><a href="#" className="">About</a></li>
                <li><a href="#"><i className="fas fa-shopping-cart"></i> Cart 0</a></li>
            </ul>
      </header>
    )
}
