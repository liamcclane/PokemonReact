import { useParams, useLocation } from '@reach/router';
import React from 'react';
export default props => {
    let blah = new URLSearchParams(useLocation().search);
    console.log(blah.get("newEmail"));
    return (
        <>
        <h1>Register</h1>
        <h3>Email</h3> 
        <p>{blah.get("newEmail")}</p>
        </>
    )
}