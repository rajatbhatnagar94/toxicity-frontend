import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={"/reddit-logo.png"} className="App-logo" alt="reddit-logo" />
          <h2>Welcome to Reddit Toxic Comment Classifier</h2>
        </div>
        <HomePage />
      </div>
    );
  }
}

export default App;
