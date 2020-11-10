import React from 'react';

import CSSClasses from './LandingNav.module.css';


export default props => {
    return (
        <div className={CSSClasses.wrapper}>
            <nav class="navbar fixed-top mt-2">
                <a class="navbar-brand" id={CSSClasses.brand} href="#">WATCH WITH ME</a>
                <a class="nav-item btn btn-danger" href="#">Sign In</a>
            </nav>
        </div>
    );
};