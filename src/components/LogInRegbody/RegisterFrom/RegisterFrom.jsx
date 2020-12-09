import React from 'react';


export default ({ firstName, lastName, email,
    changeyEmail, changeyFirstName, changeyLastName,
    registerHandler }) => {
    return (<>
        <h1>Register</h1>
        <form onSubmit={e => registerHandler(e, firstName, lastName, email)}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default-email">Email</span>
                <input type="text" className={"input-form"} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default-email"
                    name="email" value={email} onChange={e => changeyEmail(e)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default-firstName">First Name</span>
                <input type="text" className={"input-form"} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default-firstName"
                    name="firstName" placeholder="Jane"
                    onChange={e => changeyFirstName(e)} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default-lastName">Last Name</span>
                <input type="text" className={"input-form"} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default-lastNam"
                    name="lastName" placeholder="Doe"
                    onChange={e => changeyLastName(e)} />
            </div>
            <input type="submit" className="btn btn-danger" value="Register!" />
        </form>
    </>)
}