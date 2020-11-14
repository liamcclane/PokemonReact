import React, { useState, useEffect } from 'react';
import axios from 'axios';

import StoryCard from './StoryCard/StoryCard';
import FAQComp from './../FAQComp/FAQComp';

import CSSClasses from './StoryCards.module.css';

import SomeImg from './../../../assets/images/posters_2.jpg';

export default props => {

    const [stories, setStories] = useState([
        {
            "somekindakey": "somekindValue1",
            "header": "Enjoy on your TV",
            "underText": "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            "img": SomeImg,

        },
        {
            "somekindakey": "somekindValue2",
            "header": "Download your shows to watch offline.",
            "underText": "Save your favorites easily and always have something to watch.",
            "img": SomeImg,

        },
        {
            "somekindakey": "somekindValue3",
            "header": "Watch everywhere.",
            "underText": " Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
            "img": SomeImg,

        }
    ])

    let show_ids = [
        "tt4574334", // strager thing
        "tt7259746", // queer eye
        "tt6320628" // spiderman far from home
        // "&i=tt0245429"; // spritedAway
        // "&i=tt0347149"; // howls moving castel
        // "&i=tt2576852"; // kaguya
    ];
    let urls = show_ids.map(ele => process.env.REACT_APP_OMDB_BASE_URL + "&i=" + ele);
    let axiosCalls = urls.map(ele => axios.get(ele));

    useEffect(() => {
        axios.all([...axiosCalls])
            .then(axios.spread((...responses) => {
                setStories(stories.map((ele, j) => (
                    {
                        ...ele,
                        "img": responses[j].data.Poster,
                    }
                )));
            }))
            .catch(errors => console.log(errors))
    }, []);


    return (
        <>
            <ul className={CSSClasses.list}>
                {stories.map((ele, ind) => {
                    let classes = [CSSClasses.cardContainer];
                    if (ind % 2 == 1) {
                        classes.push(CSSClasses.cardContainerReverse);
                    }
                    classes = classes.join(' ');
                    return (
                        <li key={ind} className={classes}>
                            <StoryCard header={ele.header} underText={ele.underText} img={ele.img} />
                        </li>)
                })}
                <li className={CSSClasses.cardContainer}>
                    <FAQComp />
                </li>
            </ul>
        </>
    );
}