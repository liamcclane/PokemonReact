import React, { useEffect, useState } from 'react';

// importing 3rd party libs
import axios from 'axios';
import SignInForm from '../../LandingComps/SignInForm/SignInForm';
// importing other components
// importing css moudles
// importing static content



export default props => {

    let [img, setImg] = useState("");
    let [vid, setVid] = useState("");

    useEffect(() => {

        // axios.get(process.env.REACT_APP_OMDB_BASE_URL + "&i=tt0245429")
        // .then(res => {
        //     console.log(res.data);
        // })
        // .catch(err => console.log(err))
        console.log("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + process.env.REACT_APP_YT_KEY);
        axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + process.env.REACT_APP_YT_KEY)
            .then(res => {
                console.log(res.data.items[0].id);
                setImg(res.data.items[0].snippet.thumbnails.standard.url);
                setVid(res.data.items[0].id)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            <iframe src={"https://www.youtube.com/embed/"+ vid} allowFullScreen title="TheVid">

            </iframe>
            <img src={img} alt="api call"></img>
            <h1>Preview Player</h1>

        </>
    )
}