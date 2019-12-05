import React, { Component } from 'react';
import './HomePage.css';
import Cards from '../../Components/Cards'
import GetToxicity from '../../Components/GetToxicity'
import { Grid, Header,Divider, Segment } from 'semantic-ui-react';

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Grid stackable>
          <Grid.Column width={11}>
            <Cards />
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
