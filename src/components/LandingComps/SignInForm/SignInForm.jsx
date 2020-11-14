import React from 'react';

export default props => {
    return (
        <>
            <form>
                <input type="text" name="name"
                    placeholder="email@email.com"/>
                <input className="btn btn-danger" type="submit" value="Join Now!" />
            </form>
        </>
    )
}