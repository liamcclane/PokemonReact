import React from 'react';

// importing other components

// importing stylesheets
import CSSClasses from './StoryCard.module.css';

// importing static content



export default ({ header, underText, img }) => {

    let imgClasses = ["img-thumbnail", CSSClasses.img];
    imgClasses = imgClasses.join(" ");


    return (
        <>
            <div className="col-5">
                <h1>{header}</h1>
                <p>{underText}</p>
            </div>
            <div className="col-5">
                <img src={img} alt="img" className={imgClasses}></img>
            </div>
        </>
    );
}