import React, { useState } from 'react';

// importing other components
import FAQItem from './FAQItem/FAQItem';
import SignInForm from './../SignInForm/SignInForm';

// importing style sheets
import CSSClasses from './FAQComp.module.css';

// importing static content

export default props => {

    const [stories, setStories] = useState([
        {
            "title": "What is What With Me?",
            "isOpen":false,
            "information": ["Watch With Me, is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.", 
            "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"]
        },
        {
            "title": "How much does Watch With Me Cost?",
            "isOpen":false,
            "information": ["Watch With Me is completely free! Use it to create fun list that you and your friends to binge though"]
        },
        {
            "title": "Where can I access Watch With Me?",
            "isOpen":false,
            "information": ["With out App, you can log onto you account any time you have wifi or are connected to the internet."]
        },
        {
            "title": "How do I cancel?",
            "isOpen":false,
            "information": ["There is no canceling needed! This this is complete free application. Tell all your friends about it!"]
        },
        {
            "title": "What does Watch With Me include?",
            "isOpen":false,
            "information": ["Watch With Me has an unlimited number of list you can create then share again with your friends. Then as you update the list and check off shows you have watched together, everyone can see a fun history of the shows and movie you have consumed together."]
        },
    ]);

    const openHandler = (e, ind) => {
        e.preventDefault();
        // check initial boolean
        let initBool = stories[ind]["isOpen"]; 

        // set all the objects key 'isOpen' to false
        let arr = stories.map(ele => {ele["isOpen"] = false; return ele});
        
        // alter the one, 
        arr[ind]["isOpen"] = !initBool;

        // replaced back into setState
        setStories(arr);
    }


    return (
        <div className="col-9">
            <h1>Frequently Asked Questions</h1>
            <div className={CSSClasses.myAccordian} id="accordion">
                {stories.map((story, ind) => (
                    <FAQItem key={ind} ind={ind} title={story.title} 
                    isOpen={story.isOpen} information={story.information} 
                    openHandler={openHandler}/>
                ))}
            </div>
            <SignInForm />
        </div>
    );
};