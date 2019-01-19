import React, { Component } from 'react';

import './App.css';
import ChannelPage from './containers/ChannelPage/channel-page';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
          <ChannelPage />
      </div>
    );
  }
}

export default App;
