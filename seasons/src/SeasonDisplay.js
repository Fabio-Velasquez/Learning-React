// webpack is gonna see that we are importing a css file and will stick the css file to index.html
import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer: {
        text: 'Lets hit the beach.',
        iconName: 'sun'
    },
    winter: {

        text:'burr, its winter.',
        iconName:'snowflake'
    }


};
const getSeason = (lat, month) => {

    if(month > 2 && month < 9)
    {
        return lat > 0 ? 'summer' : 'winter';
    }
    else
    {
        return lat > 0 ? 'winter' : 'summer'
    }
};
//component should be at the bottom (standard)
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName}= seasonConfig[season]
   console.log(season)
    return (
        // this may be an issue of having too much logic in the curly braces an alternative would be create a helper variable.
        <div className = {`season-display ${season} `}> 
            <i className={`icon-left ${iconName} icon massive`}></i>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`}></i> 
        </div>
    );
};

export default SeasonDisplay;