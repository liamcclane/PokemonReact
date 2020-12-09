import React, {useState} from 'react';

import CSSClasses from './SignInForm.module.css';


export default props => {
    return (
        <>
            <h5 className="text-center mt-4">Enter your email now to sign up!</h5>
            <form className={CSSClasses.form} action="/register" method="get">
                <input type="text" name="newEmail"
                    placeholder="email@email.com" id={CSSClasses.searchy}/>
                <input type="submit" value="Join Now!"  id={CSSClasses.signUpBtn}/>
            </form>
        </>
    )
}