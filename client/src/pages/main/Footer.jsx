import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/HeaderCarousel.css'
// import bgImg from '../../Images/heroImg.png'
import { Route } from 'react-router-dom'




function Footer () {
    return (
        <div className='footer-section'>
            <div className="footer-grid">background
                <div className="carousel-strip">
                    <div className="carousel-boxes">
                        {/* <div className="carousel-test"></div> */}
                            <div className="carousel-box">box 1</div>
                            <div className="carousel-box box-2">box 2</div>
                            <div className="carousel-box">box 3</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;