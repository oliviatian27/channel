import React, { Component } from 'react';
import {  BrowserRouter,Switch, Route } from 'react-router-dom';

import './App.css';
import ChannelPage from './containers/ChannelPage/channel-page';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ChannelPage} />
        </Switch >
      </ BrowserRouter>

    );
  }
}

export default App;
