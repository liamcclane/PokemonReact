import React, { useState } from 'react';

import { useParams, useLocation } from '@reach/router';





export default ({ registerHandler }) => {
    let blah = new URLSearchParams(useLocation().search);
    console.log(blah.get("newEmail"));

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
            <h1>Register</h1>
            <h3>Email</h3>
            <p>{blah.get("newEmail")}</p>
            <form onSubmit={e => registerHandler(e,firstName,lastName,email)}>
                {email}
                <input type="text" name="email"
                    value={blah.get("newEmail")} 
                    onChange={e => changeyEmail(e)} />
                {firstName}
                <input type="text" name="firstName" 
                    placeholder="firstName"
                    onChange={e => changeyFirstName(e)} />
                {lastName}
                <input type="text" name="lastName" 
                    placeholder="lastName"
                    onChange={e=> changeyLastName(e)}
                />
                <input type="submit" className="btn btn-danger" value="Register!" />
            </form>

        </>
    )
}