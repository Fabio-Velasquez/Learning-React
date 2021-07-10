import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
// convention to put packages above files.
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component{
    state = {images: []};
    // async keyword allows us to use the async keyword in order to make a network request
    // this is easier to write versus the .then syntax version.
    onSearchSubmit = async (term) => {
        // whenever we make a request using axios it returns an object called a "promise"
        const response = await unsplash.get('/search/photos',{
            params: {
                query: term}
        });
         
            this.setState({images: response.data.results });
        /*.then((response) => {
            console.log(response.data.results);
        }); */

    }
    render(){

        return (         
            <div className = 'ui container' style = {{marginTop: '10px'}}>
               {/* when you are passing properties in componenets they can be any name not just onSubmit  */}
                <SearchBar onSubmit = {this.onSearchSubmit} ></SearchBar>
                <ImageList images = {this.state.images}/>
            </div>
        );

    }

}


export default App