import React from 'react';

// importing other components

// importing stylesheets
import CSSClasses from './StoryCard.module.css';

// importing static content

export default ({ header, underText, img }) => {

    let imgClasses = ["img-thumbnail", CSSClasses.img];
    let leftBox = ["col", "col-5-lg", CSSClasses.lefty];
    leftBox = leftBox.join(" ");
    imgClasses = imgClasses.join(" ");

    console.log("img in StoryCard.js", img);
    return (
        <>
            <div className="col">
                <h1 className={CSSClasses.lefty}>{header}</h1>
                <p className={CSSClasses.lefty}>{underText}</p>
            </div>
            <div className="col text-center">
                <img src={img} alt="img" className={imgClasses}></img>
            </div>
        </>
    );
}