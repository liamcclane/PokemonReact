import React from 'react';

import {Link} from '@reach/router';

export default ({ firstName, lastName, email,
    changeyEmail, changeyFirstName, changeyLastName,
    registerHandler }) => {
    return (<>
        <h1>Register</h1>
        <form onSubmit={e => registerHandler(e, firstName, lastName, email)}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default-email">Email</span>
                <input type="text" className={"form-control"} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default-email"
                    name="email" value={email} onChange={e => changeyEmail(e)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default-firstName">First Name</span>
                <input type="text" className={"form-control"} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default-firstName"
                    name="firstName" placeholder="Jane"
                    onChange={e => changeyFirstName(e)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default-lastName">Last Name</span>
                <input type="text" className={"form-control"} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default-lastNam"
                    name="lastName" placeholder="Doe"
                    onChange={e => changeyLastName(e)} />
            </div>
            <div className="row justify-content-between" >
            <input type="submit" className="btn btn-danger" value="Register!" />
            <Link className="text-danger" to='/signin'>sign into existing account</Link>
            </div>
        </form>
    </>)
};

{/* // code taken from https://getbootstrap.com/docs/4.0/components/input-group/
    <div className="input-group mb-3">
    <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
    </div>
    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
</div> */}