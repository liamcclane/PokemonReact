import React from 'react';


import CSSClasses from './LandingMain.module.css';

import Hero from './Hero/Hero';
import StoryCards from './StoryCards/StoryCards';


export default props => {
    return (<>
        <div>
            <Hero />
        </div>
        <div>
            <StoryCards />
        </div>
    </>);
};