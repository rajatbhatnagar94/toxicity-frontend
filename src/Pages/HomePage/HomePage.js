import React, { Component } from 'react';
import './HomePage.css';
import CardsContainer from '../../Components/CardsContainer'
import GetToxicity from '../../Components/GetToxicity'
import { Grid, Header } from 'semantic-ui-react';
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Grid stackable>
          <Grid.Column width={11}>
            <CardsContainer subreddit_name={this.props.match.params.subreddit_name} />
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

export default withRouter(HomePage);
