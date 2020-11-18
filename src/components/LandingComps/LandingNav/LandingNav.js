import React from 'react';

import {Link} from '@reach/router';

import CSSClasses from './LandingNav.module.css';


export default props => {
    return (
        <div className={CSSClasses.wrapper}>
            <nav className="navbar mt-2">
                <Link className="navbar-brand wwm-navbar-brand" to="/">WATCH WITH ME</Link>
                <Link className="nav-item btn btn-danger" to="/signin">Sign In</Link>
            </nav>
        </div>
    );
};