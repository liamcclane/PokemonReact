// https://levelup.gitconnected.com/how-to-implement-netflix-slider-with-react-and-hooks-bdb9b99d1ce4
import React from 'react';

// importing other components
import PreviewPlayer from '../../components/UserDashBoardComps/PreviewPlayer/PreviewPlayer';
import NavBar from '../../components/UserDashBoardComps/NavBar/NavBar';
import Carousels from '../../components/UserDashBoardComps/Carsoules/Carousels';

// importing stylesheets

// import CSSClasses from './UserDashboard.module.css';
import CSSClasses from './PracticeSlider.module.css';

// importing static content images


export default ({ user, signOut }) => {

    let lists = [1, 2, 3, 4, 5];

    return (
        <>
            <NavBar signOut={signOut} />
            <PreviewPlayer />

            {/* <div className={CSSClasses.myContainer}>
                <div className={CSSClasses.item}>placeholder 1</div>
                <div className={CSSClasses.item}>placeholder 2</div>
                <div className={CSSClasses.item}>placeholder 3</div>
                <div className={CSSClasses.item}>placeholder 4</div>
                <div className={CSSClasses.item}>placeholder 5</div>
            </div>
            <div>
                <div className={CSSClasses.content}>
                    <div className={CSSClasses.background}>
                        <div className={CSSClasses.left}>left</div>
                        <div className={CSSClasses.right}>right</div>
                    </div>
                    <div className={CSSClasses.contentContainer}>content here...</div>
                </div>
            </div> */}
            <div>
                <Carousels />
            </div>
        </>

    )
}