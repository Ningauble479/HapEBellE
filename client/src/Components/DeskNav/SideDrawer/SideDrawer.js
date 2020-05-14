import React from 'react';

import './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = 'layout-side-drawer';
    if (props.show) {
        drawerClasses = 'layout-side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
        <ul>
        <Link to='/about'>Stpre</Link>
        <Link to='/about'>How It Works</Link>
        <Link to='/about'>Blogs</Link>
        <Link to='/about'>recipes</Link>



            {/* <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li> */}
            <Link to='/about'>Learn More</Link>
        </ul>
    </nav>
    );
};

export default sideDrawer;