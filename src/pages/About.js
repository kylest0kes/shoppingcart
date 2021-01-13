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
                    <h5 className="project-desc">PushCart is a shopping cart application built with React and Redux. Used as a learning project, you are able to add items from the store into your cart, which then will display your items in the cart, their info, and a summary of how many items, and the total cost of your cart.</h5>
                    <h6 className="tech-used">Technologies Used:</h6>
                    <p className="project-desc">React.js, Redux, Foundation Framework</p>
                </div>
                <div className="marketing-site-content-section-block small-order-2 medium-order-1">
                    <h3 className="marketing-site-content-section-block-header">Kyle Stokes</h3>
                    <p className="marketing-site-content-section-block-subheader subheader">Full Stack Web Developer who is an innovative problem solver, and who is not only able to succeed, but to thrive, in any environment I find myself in. Graduate of the Full Stack Web Development coding bootcamp from the University of Central Florida, equipping me with an in-depth understanding, and firm foundation in frontend HTML, CSS, JavaScript, and jQuery, as well as backend APIs, MySQL, MongoDB, and Express.  Carrying a reputation for prompt completion, with great attention to thoroughness and detail, I have been promoted by multiple employers to ensure success, both individually, and as a team. My technical skills combined with my experience in fast-paced, result-driven, collaborative environments make me a strong addition to any Web Development team.</p>
                </div>
                <div className="marketing-site-content-section-img small-order-1 medium-order-2">
                    <img src={img2} alt="img" />
                </div>
            </div>
        </div>
    )
}
