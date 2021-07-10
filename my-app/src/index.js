// import the React and REACTDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom';
// Create a react component


const App = () => {
    // if the div was mulitline wrap it with parenthesis

    const buttonText = {text: 'click this'};
    const labelText = 'Enter name';
    return (
    
    <div>
        <label className = "label" htmlFor = "name">
            {labelText}
        </label>
    {/* string quote convention below:
        non jsx will have single quotes, while jsx will have double quotes    
    */}
        <input id = "name" type = "text"/>
        <button style = {{backgroundColor: 'blue', color: 'white'}}>
            {/* we cannot use js objects here to print text  */}
            {buttonText.text}
        </button>
    </div>
    );

};
//take the react component and show it on the screen 
ReactDOM.render(<App />, document.querySelector('#root'));
// the diff between import and require , an import statement relates to module systems while require its from commonJS modules 
// JSX
// special dialect of JS (it nots html)
// Browsers dont support JSX code, we write JSX then run tools to turn it into normal JS
// Very similar  in form and function to HTML with a couple differnece 
// JSX vs HTML 
//  Adding custon styling to an element uses different syntax
//  adding a class to an elemnet uses different syntax
// JSX can reference JS variables.


// Componenet Nesting: A component can be shown inside of another

// Component Reuseability: We want to make componenet that can be easily reused throughout application

// Componenet Configuration: We should be able to configure a componenet weh it is created.