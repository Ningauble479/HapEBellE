import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '../../Images/boxie.png';
// import logo from '../../reuse/images/HP-Logomark.png'
import './scss/main.scss';
import './navbar.css';

const Navbar = props => {

    // const header = document.querySelector
    // ('.desk-main-header');

    // window.addEventListener('scroll', () => {
    //     const scrollPos = window.scrollY;
    //     if(scrollPos > 10) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // })


    return (

        <nav className="desk-nav-containter">

            <div className="desk-main-header">
                <div className="logo">
                    <a href="#">LOGO</a>
                </div>
                <input
                    className="desk-menu-btn"
                    id={`desk-menu-btn`}
                    type="checkbox"
                />
                <label
                    className="desk-menu-icon"
                    htmlFor={`desk-menu-btn`}
                >
                    Menu
                </label>
                <input
                    className="desk-menu-btn"
                    id={`desk-menu-btn`}
                    type="checkbox"
                />
                <label
                    className="desk-menu-icon"
                    htmlFor={`desk-menu-btn`}
                >
                    <span className={`desk-menu-icon__line`} />
                </label>

                <div className="desk-nav-megamenu">

                    <div className="logo">
                        <a href="#">LOGO</a>
                    </div>

                    <ul className="desk-nav-links">
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">Shop</a>
                        </li>
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">How it works</a>
                        </li>
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">Blog</a>
                        </li>
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">Recipes</a>
                        </li>
                        <li className="something-nice"
                            htmlFor={`desk-menu-btn`}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum error nihil atque. Esse officia harum hic nostrum impedit, a vero qui minima enim nobis, cupiditate fugit, modi asperiores neque.</p>
                        </li>
                        <li className="something-nice"
                            htmlFor={`desk-menu-btn`}>
                            <button>Read our Latest Blog</button>
                        </li>


                    </ul>
                    <li className="desk-nav-social"
                        htmlFor={`desk-menu-btn`}>
                        <a href="#">facebook</a> /
                                <a href="#">instagram</a> /
                                <a href="#">Youtube</a>
                    </li>

                    <div className="box-ad-section">
                        
                        <h1>Check out these bad boys!</h1>

                        <div className="nav-boxes">
                        <img src={Box} />
                            <p>Small</p>
                        </div>
                        <div className="nav-boxes">
                        <img src={Box} />
                            <p>Medium</p>
                        </div>
                        <div className="nav-boxes">
                        <img src={Box} />
                            <p>Large</p>
                        </div>
                    </div>

                </div>
            </div>
        </nav >
    );
}

export default Navbar;