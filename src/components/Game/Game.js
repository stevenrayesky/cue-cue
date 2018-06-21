import React, { Component } from 'react';
import "./Game.css";

class Game extends Component {
    constructor(props) {
        super(props);
        this.renderPlayer = this.renderPlayer.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    renderPlayer(key) {
        if(!key) return;
        const player = this.props.players[key];
        return (
            <div className="player-active" onClick={(e) => this.handleClick(key)}>
                <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                <h2 className="player-name">{player.name}</h2>
            </div>
        )
    }

    handleClick(key){
        const player = this.props.players[key];
        const updatedPlayer = {
            ...player,
            "winCount": ++player.winCount
        }
        console.dir(updatedPlayer);
        this.props.updatePlayer(key, updatedPlayer);
    }

    render() {
        return (
            <div className="Game">
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