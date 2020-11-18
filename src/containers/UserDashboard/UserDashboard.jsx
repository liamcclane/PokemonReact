// https://levelup.gitconnected.com/how-to-implement-netflix-slider-with-react-and-hooks-bdb9b99d1ce4
import React from 'react';

// importing other components
import PreviewPlayer from '../../components/UserDashBoardComps/PreviewPlayer/PreviewPlayer';
import NavBar from '../../components/UserDashBoardComps/NavBar/NavBar';
import Carousels from '../../components/UserDashBoardComps/Carsoules/Carousels';

// importing stylesheets
// importing static content images


export default ({user, signOut, f}) => {

    let lists = [1,2,3,4,5];
    // console.log(signOut, " <= s in userDashboard.js");
    // console.log(user, " user in <= userDashboard.js");
    console.log(f, " f in <= userDashboard.js");
    return (
        <>
            <div>
                {/* <PreviewPlayer /> */}
                <NavBar ss={signOut} />
            </div>
            <div>
                {lists.map((ele, ind) => (
                    <Carousels key={ind} />
                ))}
            </div>
        </>
    )
}