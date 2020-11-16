import React from 'react';

import Hero from './../../components/LandingComps/Hero/Hero';
import LandingNav from './../../components/LandingComps/LandingNav/LandingNav';
import StoryCards from './../../components/LandingComps/StoryCards/StoryCards';
import Footer from './../../components/Footer';

export default props => {
    return (
        <>
            <div>
                <Hero />
                <LandingNav />
            </div>
            <div>
                <StoryCards />
            </div>
            <Footer />
        </>
    )
}