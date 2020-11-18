import React, { useState } from 'react';


export default ({ signIn }) => {

    const [email, setEmail] = useState("");

    const changey = e => {
        setEmail(e.target.value);
    }

    return (
        <>
            <form onSubmit={e => signIn(e,email)}>
                <input type="email" name="email"
                    placeholder="email@mail.com"
                    onChange={e => changey(e)} />
                <input type="submit" className="btn btn-danger" />
            </form>
        </>
    )
}