import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';
// const App = () => {
//    window.navigator.geolocation.getCurrentPosition( 
//        (position) => console.log(position),
//        (err) => console.log(err)
//     );
//     return(

//         <div>Latitude: </div>

//     );
    

// }


// functional implementation ^ 


/// class implementation 
/*
rules of Class components 

Must be a JS class
must extend (subclass) React.Component 

Must define a render method that returns some amount of JSX
*/
class App extends React.Component {
    //constructor(props){
     //   super(props);
        // this is the only time you do an assignment to this.state othwise us
        // setState to update values.
  
        // it is reccomended to do data loading (geolocation method) in teh componentDidMount method. This will lead to clear code

    //}
    state = {lat: null, errorMessage: '' };
    // componenetDidMount is a method will show it on screen
    componentDidMount(){
        console.log("My component was rendered to teh screen")
        window.navigator.geolocation.getCurrentPosition( 
            (position) => this.setState({ lat: position.coords.latitude }),
                // set state is mandatory to update latitude when react see this 
                // it will call our render method a second time and return the new state
                (err) => this.setState( {errorMessage: err.message})
        );

    }
    componentDidUpdate(){
        
        console.log("it was updated")
    }
    // componenDidUpdate will check if there are any updates in the component
    // it good to know everytime the component updates the render method is called.
    // componenetWillUnmount 
    // we have to define render 
    renderContent(){
        if (this.state.errorMessage && !this.state.lat)
        {
          return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.lat)
        {
          return <SeasonDisplay lat = {this.state.lat}/>
        }
        return <Spinner message = "Please accept location request"/>

    }
    render() {
        return(
            <div className = "border red">
                {this.renderContent()}
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));

/*
Rules of State 

Only useable with class components 

You will confused props with state :(

state is a JS object that contains data relevant to a component 

Updated state on a component causes the component to aslmostt instately rerender

state must be initialized when a component is created 


dont forget below!!!
State can only be updated using the function "set state"
*/
