import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'
import bgImg from '../../Images/footerImg.png'
import { Route } from 'react-router-dom'






function Footer() {
    return (
        <div className='footer__section'>

            <div className='footer__hero' style={{ backgroundImage: `url(${bgImg})` }} ></div>
            <div className='footer__content'>

                <div className='footer__info'>
                    <h1 className='footer__title'>Company</h1>
                    <ul className="link__items">
                        <li>How It Works</li>
                        <li>About Us</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                    </ul>
                </div>

                <div className='footer__info'>
                    <h1 className='footer__title'>Inquiries</h1>
                    <ul className="link__items">
                        <li>Careers</li>
                        <li>Affiliate Program</li>
                        <li>Sponsors</li>
                        <li>Partnerships</li>
                    </ul>
                </div>

                <div className='footer__info'>
                    <h1 className='footer__title'>Orders</h1>
                    <ul className="link__items">
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                    </ul>
                </div>

            </div>
        </div>


    );
}

export default Footer;