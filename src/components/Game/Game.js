import React, { Component } from 'react';
import "./Game.css";

class Game extends Component {
    constructor(props) {
        super(props);
        this.renderPlayer = this.renderPlayer.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    renderPlayer(key) {
        if(!key) return (
            <div className="player-active"></div>
        );
        const player = this.props.players[key];
        return (
            <div className="player-active" onClick={(e) => this.handleClick(key)}>
                <div className="player">
                    <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                    <p className="player-name">{player.name}</p>
                </div>
            </div>
        )
    }

    handleClick(key){
        const winningPlayer = this.props.players[key];
        const updatedWinner = {
            ...winningPlayer,
            "winCount": ++winningPlayer.winCount,
            "streak": ++winningPlayer.streak
        }
        this.props.updatePlayer(key, updatedWinner);

        const loserKey = (key === this.props.player1) ? this.props.player2 : this.props.player1;
        const losingPlayer = this.props.players[loserKey];
        const updatedLoser = {
            ...losingPlayer,
            "lossCount": ++losingPlayer.lossCount,
            "streak": 0
        }

        this.props.updatePlayer(loserKey, updatedLoser)
    }

    render() {
        return (
            <div className="Game mobile">
                <h3>Current Game</h3>
                <div className="players">
                    {this.renderPlayer(this.props.player1)}
                    {this.renderPlayer(this.props.player2)}
                </div>
                <button className="waves-effect waves-light btn clear-game" onClick={this.props.clearGame}>Clear Game</button>
            </div>
        );
    }
}

export default Game;