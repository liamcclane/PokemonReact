import React, { useState } from 'react';

import BodyFrom from './../../components/LogInRegbody/BodyForm';
import LandingNav from './../../components/LandingComps/LandingNav/LandingNav';
import Footer from './../../components/Footer';
import LoginForm from './../../components/LogInRegbody/LogInForm/LoginForm';

export default ({ signIn }) => {

    const [email, setEmail] = useState("");

    const changey = e => {
        setEmail(e.target.value);
    }

    return (
        <>
            <LandingNav bgColor={"black"} />
            <BodyFrom>
                <LoginForm email={email}  signIn={signIn} changey={changey}/>
            </BodyFrom>
            <Footer />
        </>
    )
}