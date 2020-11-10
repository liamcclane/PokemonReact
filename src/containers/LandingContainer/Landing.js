import React from 'react';

import LandingNav from './../../components/LandingComps/LandingNav/LandingNav';
import LandingMain from './../../components/LandingComps/LandingMain';
import Footer from './../../components/Footer';

export default props => {
    return (
        <>
            <LandingMain />
            <LandingNav />
            <Footer />
        </>
    )
}