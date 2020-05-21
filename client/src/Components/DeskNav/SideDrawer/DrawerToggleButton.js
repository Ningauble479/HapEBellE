import React from 'react';
import HamburgerIcon from './Hamburger';
import './DrawerToggleButton.css'

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        
        {/* <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" /> */}
        <HamburgerIcon />
    </button>
);


export default drawerToggleButton;