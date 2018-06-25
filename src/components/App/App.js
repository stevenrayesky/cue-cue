import React, { Component } from 'react';
import './App.css';
import PlayerList from '../PlayerList/PlayerList';
import Game from '../Game/Game';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import base from '../../config/firebase';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {},
      games: [],
      player1: null,
      player2: null,
      width: window.innerWidth,
      activeTab: "PlayerList",
      showHistory: false,
      gameType: "8-Ball"
    }

    this.addPlayer = this.addPlayer.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
    this.updatePlayers = this.updatePlayers.bind(this);
    this.clearGame = this.clearGame.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.addGame = this.addGame.bind(this);
    this.toggleHistory = this.toggleHistory.bind(this);
    this.updateGameType = this.updateGameType.bind(this);
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
    base.syncState(`${this.props.match.params.sessionId}/games`, {
      context: this,
      state: 'games'
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

  updatePlayers(key, updatedWinner, loserKey, updatedLoser) {
    const players = {...this.state.players};
    players[key] = updatedWinner;
    players[loserKey] = updatedLoser;
    this.setState({ players });
    setTimeout(() => {this.clearGame()}, 2000);
  }

  addGame(game){
    const games = [...this.state.games];
    games.push(game);
    this.setState({ games });
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

  toggleHistory(){
    this.setState({ showHistory: !this.state.showHistory })
  }

  updateGameType(gameType){
    this.setState({ gameType });
  }

  render() {
    const { width, activeTab } = this.state;
    const isMobile = width <= 850;
    
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
          updatePlayers={this.updatePlayers}
          addGame={this.addGame}
          clearGame={this.clearGame}
          toggleHistory={this.toggleHistory}
          showHistory={this.state.showHistory}
          games={this.state.games}
          updateGameType={this.updateGameType}
          gameType={this.state.gameType}
        />
      } else {
        tab = <LeaderBoard
          players={this.state.players}
        />
      }
      return (
        <div>
          <Header
              changeTab={this.changeTab}
            />
          <div className="App">
            {tab}
          </div>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <Header
              changeTab={this.changeTab}
            />
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
              updatePlayers={this.updatePlayers}
              addGame={this.addGame}
              clearGame={this.clearGame}
              toggleHistory={this.toggleHistory}
              showHistory={this.state.showHistory}
              games={this.state.games}
              updateGameType={this.updateGameType}
              gameType={this.state.gameType}
            />
            <LeaderBoard
              players={this.state.players}
            />
          </div>
          <Footer/>
        </div>
      )
    }
  }
}

export default App;
