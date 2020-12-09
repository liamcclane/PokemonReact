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
                        <h1 className={CSSClasses.headerText}>Unlimited shows and movies to watch with friends and family</h1>
                        <h5>Watch whenever, wherever.</h5>
                        <SignInForm />
                    </div>
                </div>
            </div>
        </div>
    );
}