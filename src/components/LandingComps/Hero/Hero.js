import React from 'react';

import SignInForm from './../SignInForm/SignInForm';

import CSSClasses from './Hero.module.css';

export default props => {
    return (
        <div className="row justify-content-center text-center">
            <div className={CSSClasses.imgContainer}>
                <div className={CSSClasses.image}></div>
                <div className={CSSClasses.after}>
                    <div className={CSSClasses.inners}>
                        <h1 className={CSSClasses.headerText}>Unlimited shows and movies to watch with friend and family</h1>
                        <h5>somethig else</h5>
                        <SignInForm />
                        {/* <form>
                                <input type="text" name="name"
                                placeholder="email@email.com" id={CSSClasses.searchy}/>
                                <input className="btn btn-danger" type="submit" value="Join Now!" id={CSSClasses.signUpBtn} />
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}