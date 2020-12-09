import React from 'react';

import { Link } from '@reach/router';

export default ({ email, changey, signIn }) => {
    return (<>
        <h1>Welcome back, Sign In</h1>
        <form onSubmit={e => signIn(e, email)}>
            <div className="input-group mb-3 mt-4">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                </div>
                <input className="form-control" aria-label="Default"
                    aria-describedby="inputGroup-sizing-default" type="email" name="email"
                    placeholder="email@email.com"
                    onChange={e => changey(e)} />
            </div>
            <div className="row p-3 justify-content-between">
                <input type="submit" className="btn btn-danger" />
                <Link className="text-danger" to="/register">create an account</Link>
            </div>
        </form>
    </>)
}