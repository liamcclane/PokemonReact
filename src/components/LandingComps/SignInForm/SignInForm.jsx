import React from 'react';

import CSSClasses from './SignInForm.module.css';


export default props => {
    return (
        <>
            <p className="text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <form className={CSSClasses.form}>
                <input type="text" name="name"
                    placeholder="email@email.com" id={CSSClasses.searchy}/>
                <input type="submit" value="Join Now!"  id={CSSClasses.signUpBtn}/>
            </form>
        </>
    )
}