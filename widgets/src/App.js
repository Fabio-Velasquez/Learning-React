import React from 'react';
import reactDOM from 'react-dom';
import Accordian from './Accordion';

const items = [
    {
        title: "What is React?",
        content: "React is a front end js framework"
    },
    {
        title: "Why use React?",
        content: "React is favored among engineers"
    },
    {
        title: "How do you use React?",
        content: "By using components"
    }
];

export default () => {
    return (
    <div>
        <br></br>
        <Accordian items = {items}></Accordian>
    </div>
    );
};