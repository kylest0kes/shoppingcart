import React from 'react';
import img1 from '../images/aboutpg-img1.jpeg';
import img2 from '../images/kyle-logo.png';

import './pages.css'

export default function About() {
    return (
        <div className="about-container">
            <div className="marketing-site-content-section">
                <div className="marketing-site-content-section-img">
                    <img src={img1} alt="img" />
                </div>
                <div className="marketing-site-content-section-block">
                    <h3 className="marketing-site-content-section-block-header">PushCart</h3>
                    <h5 className="project-desc">PushCart is a shopping cart application built with React and Redux. Used as a learning project, you are able to add items from the store into your cart, which then will display your items in the cart, their info, and a summary of how many items, and the total cost of your cart.</h5>
                    <h6 className="tech-used">Technologies Used:</h6>
                    <p className="project-desc">React.js, Redux, Foundation Framework</p>
                </div>
                <div className="marketing-site-content-section-block small-order-2 medium-order-1">
                    <h3 className="marketing-site-content-section-block-header">Built By:</h3>
                    <h3 className="">Kyle Stokes</h3>
                    <div className="social-footer-icons">
                        <ul className="menu simple">
                            <li><a href="https://github.com/kylest0kes" target="blank"><i className="about-icons fab fa-github-square"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/kylest0kes/" target="blank"><i className="about-icons fab fa-linkedin"></i></a></li>
                            <li><a href="mailto:kylestokes1551@gmail.com" target="blank"><i className="about-icons fas fa-envelope"></i></a></li>
                            <li><a href="http://kyle-stokes.com/" target="blank"><i className="about-icons far fa-window-maximize"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="marketing-site-content-section-img small-order-1 medium-order-2">
                    <img src={img2} alt="img" />
                </div>
            </div>
        </div>
    )
}
