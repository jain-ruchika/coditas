import React, { Component } from 'react';
import './App.css';
import SearchResult from './SearchResult';

class App extends Component {
  render() {
    let searchName = null;
    return (
      <div className="App">
        <div className="App-header">
        <select style={{"width": "360px"}}>
          <option>Sort by Name</option>
        </select>
        <input id="name" placeholder="Enter a name" style={{"width": "360px"}} onChange={(e) => { this.searchName =e.target.value}}></input>
        </div>
        <br/>
        {(searchName !== null && searchName !== undefined) ? <SearchResult searchName={searchName}/> : null}
      </div>
    );
  }
}

export default App;
