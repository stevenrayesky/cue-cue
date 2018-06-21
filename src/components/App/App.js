import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Game from '../Game/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {},
      player1: null,
      player2: null
    }

    this.addPlayer = this.addPlayer.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.pickWinner = this.pickWinner.bind(this);
    this.clearGame = this.clearGame.bind(this);
  }

  addPlayer(player) {
    const players = {...this.state.players};
    const timestamp = Date.now();
    players[`player-${timestamp}`] = player;
    this.setState({ players});
  }

  setPlayer(key) {
    // const player = this.state.players[key];
    if(!this.state.player1) {
      this.setState({ player1: key })
    } else if (key != this.state.player1) {
      this.setState({ player2: key })
    } else {
      alert("player1 can't be player2!");
    }
  }

  updatePlayer(key, updatedPlayer) {
    console.log("updatePlayer method!");
    const players = {...this.state.players};
    players[key] = updatedPlayer;
    this.setState({ players });
    this.clearGame();
  }

  pickWinner(player) {
    console.log(`picking winner...`);
  }

  clearGame() {
    this.setState({
      player1: null,
      player2: null
    })
  }

  render() {
    return (
      <div className="App">
        <PlayerList
          players={this.state.players}
          addPlayer={this.addPlayer}
          player1={this.state.player1}
          player2={this.state.player2}
          setPlayer={this.setPlayer}
        />
        <Game
          players={this.state.players}
          player1={this.state.player1}
          player2={this.state.player2}
          updatePlayer={this.updatePlayer}
          pickWinner={this.pickWinner}
          clearGame={this.clearGame}
        />
        <h1>test</h1>
      </div>
    );
  }
}

export default App;
