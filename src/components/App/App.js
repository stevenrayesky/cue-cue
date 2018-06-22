import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Game from '../Game/Game';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import base from '../../config/firebase';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {},
      player1: null,
      player2: null,
      width: window.innerWidth,
      activeTab: "PlayerList"
    }

    this.addPlayer = this.addPlayer.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.clearGame = this.clearGame.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  

  componentDidMount() {
    base.syncState(`${this.props.match.params.sessionId}/players`, {
      context: this,
      state: 'players'
    }
    )
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
    } else if (key !== this.state.player1) {
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

  clearGame() {
    this.setState({
      player1: null,
      player2: null
    })
  }

  changeTab(tab){
    this.setState({ activeTab: tab})
  }

  render() {
    const { width, activeTab } = this.state;
    const isMobile = width <= 768;
    
    if(isMobile){
      let tab;
      if (activeTab === "PlayerList") {
        tab = <PlayerList
          players={this.state.players}
          addPlayer={this.addPlayer}
          player1={this.state.player1}
          player2={this.state.player2}
          setPlayer={this.setPlayer}
        />
      } else if (activeTab === "Game") {
        tab = <Game
          players={this.state.players}
          player1={this.state.player1}
          player2={this.state.player2}
          updatePlayer={this.updatePlayer}
          clearGame={this.clearGame}
        />
      } else {
        tab = <LeaderBoard
          players={this.state.players}
        />
      }
      return (
        <div className="App">
          <Header
            changeTab={this.changeTab}
          />
          {tab}
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header
            changeTab={this.changeTab}
          />
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
            clearGame={this.clearGame}
          />
          <LeaderBoard
            players={this.state.players}
          />
        </div>
      )
    };
  }
}

export default App;
