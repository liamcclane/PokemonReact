import React, { useState } from 'react';

// importing 3rd party libs
import { Link, navigate } from '@reach/router';

// importing other components
// importing css moudles
import CSSClasses from './NavBar.module.css';
// importing static content



export default ({ ss }) => {

    const [navItems, setNavItems] = useState([
        { "name": "Home", "isActive": true },
        { "name": "TV Shows", "isActive": false },
        { "name": "Movies", "isActive": false },
        { "name": "New & Popular", "isActive": false },
        { "name": "New List", "isActive": false }
    ])
    
    console.log(ss);
    return (
        <div className={CSSClasses.wrapper}>
            <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand wwm-navbar-brand">Watch With Me</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <p>Browse</p>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {navItems.map((ele, i) => (
                            <li key={i} className="nav-item">
                                <Link to="/" className="nav-link">{ele.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link className="form-inline nav-item btn btn-outline-danger ml-2" to="/">Other Link</Link>
                    <Link className="form-inline nav-item btn btn-outline-danger ml-2" to="/">Other Link</Link>
                    <div className="form-inline nav-item btn btn-outline-danger ml-2" onClick={e => ss(e)}>Sign out</div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}