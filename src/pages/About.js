import React from 'react' 
import img1 from '../images/aboutpg-img1.jpeg';
import img2 from '../images/kyle-logo.png';

import './about.css'

export default function About() {
    return (
        <div className="about-container">
            <div className="marketing-site-content-section">
                <div className="marketing-site-content-section-img">
                    <img src={img1} alt="img" />
                </div>
                <div className="marketing-site-content-section-block">
                    <h3 className="marketing-site-content-section-block-header">PushCart</h3>
                    <h5 className="project-desc">PushCart is a ...</h5>
                    <p className="marketing-site-content-section-block-subheader subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis, maxime libero natus qui minus!</p>
                    <h6 className="tech-used">Technologies Used:</h6>
                    <p className="marketing-site-content-section-block-subheader subheader">blahhhhhhhh</p>
                </div>
                <div className="marketing-site-content-section-block small-order-2 medium-order-1">
                    <h3 className="marketing-site-content-section-block-header">Kyle Stokes</h3>
                    <p className="marketing-site-content-section-block-subheader subheader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis, maxime libero natus qui minus!</p>
                </div>
                <div className="marketing-site-content-section-img small-order-1 medium-order-2">
                    <img src={img2} alt="img" />
                </div>
            </div>
        </div>
    )
}
