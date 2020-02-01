import React, { Component } from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./Pages/IndexPage/IndexPage"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={"/reddit-logo.png"} className="App-logo" alt="reddit-logo" />
            <h2>Welcome to Reddit Toxic Comment Classifier</h2>
          </div>
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <Route path="/classify/:subreddit_name">
              <HomePage />
            </Route>
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
