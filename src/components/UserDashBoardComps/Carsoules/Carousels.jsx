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
        "title": "Ghbli",
        "movies": [
            "tt0245429", // spritedAway
            "tt0347149", // howls moving castel
            "tt2576852", // kaguya
            "tt1798188", // up on poppy hill
            "tt0097814", // kiki
            /*******/
            "tt0119698", // Princess Mononoke
            "tt0096283" // totoro
        ]
    }
    let listObj = {
        "user_id": user.id,
        "_id": "1029",
        "title": "Marvel Favs",
        "movies": [
            "tt2250912", // spiderman homecoming
            "tt6320628", // spiderman far from home
            "tt3501632", // thor rag
            "tt0371746", // iron man
            "tt4154796", // end game
            /********/
            "tt4154756", // infinity war
            "tt3498820", // civil war
            "tt1843866", // winter soldier
            "tt2015381", // gardians of the galaxy
            "tt3896198", //  gardians of the galaxy vol2
            /********/
            "tt0478970", // ant-man
            "tt5095030", // ant-man two
            "tt0800369", // thor
            "tt1981115", // thor the dark world
            "tt2395427" // avengers age of ultron
        ]
    }
    let listObj3 = {
        "user_id": user.id,
        "_id": "1029",
        "title": "Misc",
        "movies": [
            "tt4574334", // stranger thing
            "tt7259746", // queer eye
            "tt0108778", // friends
            "tt0944947", // GoT
            "tt0238784", // Gilmore Girls
        ]
    };
    let listObj4 = {
        "user_id": user.id,
        "_id": "1029",
        "title": "Disney",
        "movies": [
            "tt3521164", // mowana
            "tt2294629", // frozen
            "tt4520988", // forzen 2
            "tt0398286", //tangled
            "tt2948356", // zootopia
            /******/
            // "tt1217209", //brave
            // "tt1772341", // wreck it wralph
            // "tt0780521", // princess and the frog
            // "tt0317705", // incredibles
            // "tt0198781", // monsters inc
            /******/
        ]
    }
    // let arr = [listObj2, listObj, listObj3, listObj4];
    let arr = [listObj4];
    return (
        <>
            {arr.map((ele, ind) => (
                <Carousel key={ind} ind={ind} movieList={ele} />))}
        </>
    )
}