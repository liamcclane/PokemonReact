import React, { useEffect, useState } from 'react';

// importing 3rd party libs
import axios from 'axios';
// importing other components
// importing css modules
import CSSClasses from './PreviewPlayer.module.css';
// importing static content



export default props => {

    let [vid, setVid] = useState("");

    useEffect(() => {

        axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" + process.env.REACT_APP_YT_KEY)
            .then(res => {
                console.log(res.data.items[0].id);
                setVid(res.data.items[0].id)
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <>
            <div className={CSSClasses.wrapper}>
                <iframe className={CSSClasses.vidView} src={"https://www.youtube.com/embed/" + vid} title="TheVid">
                </iframe>
                <div className={CSSClasses.overlayDiv}>
                    <div className={CSSClasses.text}>
                        <h1>PlaceHolder</h1>
                    </div>
                    {/* <div className="row justify-content-start mb-4">
                        <div className="col-4 border rounded mb-4">
                        </div> *
                        </div>
                    */}
                </div>
            </div>
        </>
    )
}