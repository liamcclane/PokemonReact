import React, { useState } from 'react';

import { useParams, useLocation } from '@reach/router';

import BodyFrom from './../../components/LogInRegbody/BodyForm';
import LandingNav from './../../components/LandingComps/LandingNav/LandingNav';
import Footer from './../../components/Footer';
import RegisterForm from './../../components/LogInRegbody/RegisterFrom/RegisterFrom';

export default ({ registerHandler }) => {
    let blah = new URLSearchParams(useLocation().search);
    // console.log(blah.get("newEmail"));

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(blah.get("newEmail"));

    const changeyFirstName = e => {
        e.preventDefault();
        setFirstName(e.target.value);
    }
    const changeyLastName = e => {
        e.preventDefault();
        setLastName(e.target.value);
    }
    const changeyEmail = e => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    return (
        <>
            <LandingNav bgColor={"black"} />
            <BodyFrom>
                <RegisterForm 
                    registerHandler={registerHandler}
                    firstName={firstName} lastName={lastName} email={email}
                    changeyEmail={changeyEmail} changeyFirstName={changeyFirstName}
                    changeyLastName={changeyLastName} 
                ></RegisterForm>
            </BodyFrom>
            <Footer />
        </>
    )
}