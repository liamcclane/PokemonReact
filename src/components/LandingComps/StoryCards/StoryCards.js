import React, { useState } from 'react';

import StoryCard from './StoryCard/StoryCard';
import FAQComp from './../FAQComp/FAQComp';

import CSSClasses from './StoryCards.module.css';

import SomeImg from './../../../assets/images/posters_2.jpg';

export default props => {

    const [stories, setStories] = useState([
        { "somekindakey": "somekindValue1" },
        { "somekindakey": "somekindValue2" },
        { "somekindakey": "somekindValue3" }
    ])




    return (
        <>
            <ul className={CSSClasses.list}>
                {stories.map((ele, ind) => {
                    let classes = [CSSClasses.cardContainer];
                    if(ind%2==1) {
                        classes.push(CSSClasses.cardContainerReverse);
                    }
                    classes = classes.join(' ');
                    return (
                    <li key={ind} className={classes}>
                        <StoryCard info={ele.somekindakey} someImg={SomeImg}/>
                    </li>)
                })}
                <li className={CSSClasses.cardContainer}>
                    <FAQComp />
                </li>
            </ul>
        </>
    );
}