import React from 'react';


export default ({email, changey, signIn}) => {
    return (<>
        <h1>LOGIN</h1>
        <form onSubmit={e => signIn(e, email)}>
            <input type="email" name="email"
                placeholder="email@mail.com"
                onChange={e => changey(e)} />
            <input type="submit" className="btn btn-danger" />
        </form>
    </>)
}