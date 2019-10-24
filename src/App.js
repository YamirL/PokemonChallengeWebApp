import React, { Component } from 'react';
/* Third Party */
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
/* Own Components*/
import Ranking from './componentes/ranking';
import BattleList from './componentes/BattleList';
import Pokemon from './componentes/pokemon';
import { API_BATTLES } from './constants/constants';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      battles: null,
      ranking: null,
      item: null
    };
  }

  handleSelectedBattle = (battle) => {
    const { ranking } = battle;
    this.setState({ ranking });
  }

  handleSelectedItem = (pokemon) => {
    this.setState({ pokemon });
  }

  componentDidMount() {
    const request = {
      method: 'get',
      url: API_BATTLES,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }


    /* Call API */
    axios(request)
      .then(response => {
        this.setState({ battles: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }





  render() {

    return (
      <Grid spacing={3}>
        <AppBar position="static">
          <Toolbar color="black">
            <IconButton color="inherit">
              &#8801;
                </IconButton>
            <Typography variant='h6' color='inherit'>Pokemon Arena</Typography>
          </Toolbar>
        </AppBar>
        <Row>
          <Col xs={12} md={4}>
            <BattleList battles={this.state.battles} onSelectedBattle={this.handleSelectedBattle}></BattleList>
          </Col>
          <Col xs={4} md={4}>
            <Ranking ranking={this.state.ranking} onSelectedItem={this.handleSelectedItem}></Ranking>
          </Col>
          <Col xs={4} md={4}>
            <Pokemon data={this.state.pokemon}></Pokemon>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

/*
{/**/
