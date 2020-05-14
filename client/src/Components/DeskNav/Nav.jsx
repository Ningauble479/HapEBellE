import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import logo from '../../Images/HP-Logomark.png'
import '../../styles/Nav.css'



const Nav = props => (
    <nav className="navbar">
        <div className='nav__items'>
            <div className="navbar__toggle-button">
            </div>
            <a className='nav__item--left' href='/'><img src={logo} alt='Traveler Pack Logo' className='nav__item--logo' /></a>
            <Link className='nav__item--link'
                to='/about'>Shop</Link>
            <Link className='nav__item--link'
                to='/news'>Recipes</Link>
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
    </nav>
)

export default Nav;