import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../reuse/images/HP-Logomark.png'
import './mobileNav.css';
import './scss/main.scss'

const MobileNav = props => {



    return (

        <nav className="nav-containter"> 
        <div className="main-header">
                <div className="logo">
                    <a href="#">LOGO</a>
                </div>

                <input
                    className="menu-btn"
                    id={`menu-btn`}
                    type="checkbox"
                />
                <label
                    className="menu-icon"
                    htmlFor={`menu-btn`}
                >
                    <span className={`menu-icon__line`} />
                </label>

                <ul className="nav-links">
                    <li className="nav-link">
                        <a href="#">Shop</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">How It Works</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Blogs</a>
                    </li>
                    <li className="nav-link">
                        <a href="#">Recipes</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MobileNav;

