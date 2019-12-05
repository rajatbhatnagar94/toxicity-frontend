import React, { Component } from 'react';
import './App.css';
import CommentThread from './Components/CommentThread'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={"/reddit-logo.png"} className="App-logo" alt="reddit-logo" />
          <h2>Welcome to Reddit Toxic Comment Classifier</h2>
        </div>
        <div className="sixteen wide column rendered-example views-comment-types-comment-example-comment" style={ { "padding": "2rem"} }>
          <CommentThread />
        </div>
      </div>
    );
  }
}

export default App;
