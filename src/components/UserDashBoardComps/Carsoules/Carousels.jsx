import React, {useEffect} from 'react';

// importing 3rd party libs
import axios from 'axios';
// importing other components
import Carousel from './Carousel/Carousel';
// importing css moudles
import CSSClasses from './Carousels.module.css';

// importing static content



export default props => {
    let arr = [1,2,3];
    return (
        <>
            
            <h1>Carousels</h1>
            {arr.map((ele, ind) => (<Carousel key={ind} />))}
        </>
    )
}