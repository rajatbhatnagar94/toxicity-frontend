import React, { Component } from 'react';
import './IndexPage.css';
import GetToxicity from '../../Components/GetToxicity'
import { Grid, Header } from 'semantic-ui-react'
import DisplayLinks from "../../Components/DisplayLinks"


class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Grid stackable>
          <Grid.Column width={5}>
            <DisplayLinks />
          </Grid.Column>
          <Grid.Column width={6}>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header></Header>
            <GetToxicity />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
