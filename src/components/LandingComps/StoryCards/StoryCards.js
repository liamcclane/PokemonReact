import React, {useState} from 'react';

import StoryCard from './StoryCard/StoryCard';

export default props => {

    const [stories, setStories] = useState([
        {"somekindakey": "somekindValue1"},
        {"somekindakey": "somekindValue2"},
        {"somekindakey": "somekindValue3"},
        {"somekindakey": "somekindValue4"}
    ])




    return (
        <>
            {stories.map((ele, ind) => (
                <StoryCard info={ele.somekindakey} />
            ))}
        </>
    );
}