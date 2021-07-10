import React from 'react';
import ReactDOM from 'react-dom'

class SearchBar extends React.Component{

  state = {term : 'search'};
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
    console.log(this.props);

  }
  render(){
// controlled vs uncontrolled review it again
      return (
        <div className="ui segment">
          <form onSubmit = {this.onFormSubmit} className="ui form">
            <div className="field">
              <label className="ImageSearch">Image Search</label>
              <input
                type="text"
                value = {this.state.term}
                onChange={(e) => 
                  this.setState({term : e.target.value })}

              ></input>
            </div>
          </form>
        </div>
      );

  }

}

export default SearchBar