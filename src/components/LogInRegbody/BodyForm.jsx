import React from 'react';

import RegisterForm from './RegisterFrom/RegisterFrom';

import CSSClasses from './Register.module.css';


export default (props) => {

    const inputClasses = ["form-control", CSSClasses.cardInput].join(" ");

    return (
        <>
            <div className={["container-fluid", CSSClasses.backgroundImg].join(" ")}>
                <div className={[CSSClasses.myOverlay].join(" ")}>
                    <div className="row justify-content-center">
                        <div className={["border", "rounded", CSSClasses.card].join(" ")}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}