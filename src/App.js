import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Ranking from './componentes/ranking';
import BattleContainer from './componentes/BattleContainer';
import './App.css';
import Pokemon from './componentes/battle/pokemon';

function App() {
  return (
    <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position='sticky'>
              <Toolbar color="black">
                <IconButton color="inherit">
                  &#8801;
                </IconButton>
                <Typography variant='h6' color='inherit'>Pokemon Arena</Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <BattleContainer></BattleContainer>
          </Col>
          <Col xs={4} md={4}>
              <Ranking></Ranking>            
          </Col>
          <Col xs={4} md={4}>
              <Pokemon></Pokemon>           
          </Col>
        </Row>
      </Grid>

  );
}

export default App;
