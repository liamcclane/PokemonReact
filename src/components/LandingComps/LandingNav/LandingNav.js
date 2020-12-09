import React from 'react';

import {Link} from '@reach/router';

import CSSClasses from './LandingNav.module.css';


export default ({bgColor}) => {
    if(bgColor == undefined || bgColor === null) {
        bgColor = "transparent";
    }
    let inLineStyle = {background: bgColor};
    return (
        <div className={CSSClasses.wrapper} style={inLineStyle}>
            <nav className="navbar mt-2">
                <Link className="navbar-brand wwm-navbar-brand" to="/">WATCH WITH ME</Link>
                <Link className="nav-item btn btn-danger" to="/signin">Sign In</Link>
            </nav>
        </div>
    );
};