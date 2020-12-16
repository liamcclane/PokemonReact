import React, { useEffect } from 'react';

// importing 3rd party libs
import axios from 'axios';
// importing other components
import Carousel from './Carousel/Carousel';
// importing css moudles
import CSSClasses from './Carousels.module.css';

// importing static content



export default ({ user }) => {
    let listObj2 = {
        "_id": "9902",
        "user_id": user.id,
        "title": "To Watch List Bucket List",
        "movies": [
            "tt0245429", // spritedAway
            "tt0347149", // howls moving castel
            "tt2576852", // kaguya
        ]
    }
    let listObj = {
        "user_id": user.id,
        "_id": "1029",
        "title": "My Favorites",
        "movies": [
            "tt4574334", // stranger thing
            "tt7259746", // queer eye
            "tt6320628" // spiderman far from home
        ]
    }
    let arr = [listObj2, listObj];
    return (
        <>
            <h1>Carousels</h1>
            {arr.map((ele, ind) => (<Carousel key={ind} ind={ind} movieList={ele} />))}
        </>
    )
}