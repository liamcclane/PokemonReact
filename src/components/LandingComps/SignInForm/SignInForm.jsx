import React, {useState} from 'react';

import CSSClasses from './SignInForm.module.css';


export default props => {

    // const [email, setEmail] = useState("");

    // const changeHandeler = e => {
    //     console.log(email);
    //     setEmail(e.target.value);
    // }

    // const onSubmity = e => {
    //     console.log("onSubmit");
    // }

    return (
        <>
            <p className="text-center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <form className={CSSClasses.form} action="/register" method="get">
                <input type="text" name="newEmail"
                    placeholder="email@email.com" id={CSSClasses.searchy}/>
                <input type="submit" value="Join Now!"  id={CSSClasses.signUpBtn}/>
            </form>
        </>
    )
}