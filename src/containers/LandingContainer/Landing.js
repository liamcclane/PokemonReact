import React from 'react';

import LandingNav from './../../components/LandingComps/LandingNav';
import LandingMain from './../../components/LandingComps/LandingMain';
import Footer from './../../components/Footer';

export default props => {
    return (
        <>
            <LandingNav />
            <LandingMain />
            <Footer />
        </>
    )
}