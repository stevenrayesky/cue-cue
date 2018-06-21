import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {}
    }

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(player) {
    const players = {...this.state.players};
    const timestamp = Date.now();
    players[`player-${timestamp}`] = player;
    this.setState({ players});
  }

  render() {
    return (
      <div className="App">
        <h1>Session</h1>
        <PlayerList
          players={this.state.players}
          addPlayer={this.addPlayer}
        />
      </div>
    );
  }
}

export default App;
