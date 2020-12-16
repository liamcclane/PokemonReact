// https://levelup.gitconnected.com/how-to-implement-netflix-slider-with-react-and-hooks-bdb9b99d1ce4
import React from 'react';

// importing other components
import PreviewPlayer from '../../components/UserDashBoardComps/PreviewPlayer/PreviewPlayer';
import NavBar from '../../components/UserDashBoardComps/NavBar/NavBar';
import Carousels from '../../components/UserDashBoardComps/Carsoules/Carousels';

// importing stylesheets

// import CSSClasses

// importing static content images


export default ({ user, signOut }) => {

    return (
        <>
            <NavBar signOut={signOut} />
            {/* <PreviewPlayer /> */}
            <div style={{height: "500px", width: "85%", background:"lightblue"}}>
                Placeholder
            </div>
            <div>
                <Carousels  user={user}/>
            </div>
        </>

    )
}