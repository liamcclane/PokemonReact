import React from 'react';

import {Link} from '@reach/router';

import CSSClasses from './LandingNav.module.css';


export default props => {
    return (
        <div className={CSSClasses.wrapper}>
            <nav class="navbar mt-2">
                <Link class="navbar-brand" id={CSSClasses.brand} to="/">WATCH WITH ME</Link>
                <Link class="nav-item btn btn-danger" to="/signin">Sign In</Link>
            </nav>
        </div>
    );
};