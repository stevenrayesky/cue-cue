import React, { Component } from 'react';
import "./Game.css";
import { CSSTransitionGroup } from 'react-transition-group';
import GameHistory from '../GameHistory/GameHistory';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }

        this.renderPlayer = this.renderPlayer.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e, key){
        if(!this.props.player2) { alert("Please select a 2nd player!"); return;};
        e.currentTarget.classList.add('winner');

        const winningPlayer = this.props.players[key];
        const loserKey = (key === this.props.player1) ? this.props.player2 : this.props.player1;
        const losingPlayer = this.props.players[loserKey];
        const gameType = this.props.gameType;
        
        const gameResult = {
            winner: key,
            loser: loserKey,
            gameType: gameType,
            timeStamp: Date.now()
        }

        this.props.addGame(gameResult);

        const updatedWinner = {
            ...winningPlayer,
            "winCount": ++winningPlayer.winCount,
            "streak": ++winningPlayer.streak
        }

        const updatedLoser = {
            ...losingPlayer,
            "lossCount": ++losingPlayer.lossCount,
            "streak": 0
        }

        this.props.updatePlayers(key, updatedWinner, loserKey, updatedLoser);
    }

    renderPlayer(key) {
        if(!key) return;
        const player = this.props.players[key];
        return (
            <div className="player-active" onClick={(e) => this.handleClick(e, key)}>
                <div className="player">
                    <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                    <p className="player-name">{player.name}</p>
                </div>
            </div>
        )
    }

    handleChange(event) {
        const gameType = event.target.value;
        (event.target.type === 'text') ? this.setState({ input: event.target.value }) : this.setState({ input: '' });
        this.props.updateGameType(gameType);
    }

    render() {
        const gameTypes = [ "8-Ball", "9-Ball", "3-Ball", "1-Pocket", "Bank Pool"];
        const gameInputs = gameTypes.map((type) => {
            return (
                <label key={type}>
                    <input type="radio" name="gameType" value={type} onChange={this.handleChange}/>
                    <div>{type}</div>
                </label>
            )
        })
        return (
            <div className="Game mobile">
                <h3>current game</h3>
                <CSSTransitionGroup
                    component="div"
                    className="players"
                    transitionName="game-ani"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}>
                    {this.renderPlayer(this.props.player1)}
                    {this.renderPlayer(this.props.player2)}
                </CSSTransitionGroup>
                <div className="game-types">
                    {gameInputs}
                </div>
                <label>
                    <div><input type="text" name="gameType" placeholder="other game type" value={this.state.input} onChange={this.handleChange}/></div>
                </label>
                <button className="waves-effect waves-light btn clear-game" onClick={this.props.clearGame}>Clear Game</button>
                <button className="waves-effect waves-light btn game-history" onClick={this.props.toggleHistory}>Game History</button>
                {this.props.showHistory && <GameHistory
                    games={this.props.games}
                    players={this.props.players}
                />}
            </div>
        );
    }
}

export default Game;