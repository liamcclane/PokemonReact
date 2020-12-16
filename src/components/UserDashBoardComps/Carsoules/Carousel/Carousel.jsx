import React, { useEffect, useState } from 'react';

// importing 3rd party libs
import axios from 'axios';
// importing other components
// importing css modules
import CSSClasses from './Carousel.module.css';

// importing static content



export default ({ ind, movieList }) => {

    const [carPieces, setCarPieces] = useState([]);

    let urls = movieList.movies.map((movie_id, j) => (
        axios.get(process.env.REACT_APP_OMDB_BASE_URL + "&i=" + movie_id)
    ));

    useEffect(() => {
        axios.all([...urls])
            .then(responses => {
                setCarPieces(responses.map(ele => {
                    console.log(ele.data);
                    return (ele.data);
                }));
            })
            .catch(errors => console.log(errors));
    }, [])


    return (
        <>
            <h1>NETFLIX</h1>
            <div className={CSSClasses.wrapper}>
                <section id={"section1" + ind}>
                    <a href={"#section3" + ind} className={CSSClasses.arrow__btn}>‹</a>
                    {carPieces.slice(0, 5).map((ele, indx) => (
                        <div key={indx} className={CSSClasses.item} >
                            <img src={ele.Poster} alt={ele.Title} />
                        </div>
                    ))}
                    <a href={"#section2" + ind} className={CSSClasses.arrow__btn}>›</a>
                </section>
                <section id={"section2" + ind}>
                    <a href={"#section1" + ind} className={CSSClasses.arrow__btn}>‹</a>
                    {carPieces.slice(5, 10).map((ele, indx) => (
                        <div key={indx} className={CSSClasses.item} >
                            <img src={ele.Poster} alt={ele.Title} />
                        </div>
                    ))}
                    <a href={"#section3" + ind} className={CSSClasses.arrow__btn}>›</a>
                </section>
                <section id={"section3" + ind}>
                    <a href={"#section2" + ind} className={CSSClasses.arrow__btn}>‹</a>
                    {carPieces.slice(10, 15).map((ele, indx) => (
                        <div key={indx} className={CSSClasses.item} >
                            <img src={ele.Poster} alt={ele.Title} />
                        </div>
                    ))}
                    <a href={"#section1" + ind} className={CSSClasses.arrow__btn}>›</a>
                </section>
            </div>

        </>
    )
}