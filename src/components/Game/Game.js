import React, { Component } from 'react';
import "./Game.css";
import { CSSTransitionGroup } from 'react-transition-group';

class Game extends Component {
    constructor(props) {
        super(props);
        this.renderPlayer = this.renderPlayer.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, key){
        if(!this.props.player2) { alert("Please select a 2nd player!"); return;};
        e.currentTarget.classList.add('winner');
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

    render() {
        return (
            <div className="Game mobile">
                <h3>Current Game</h3>
                <CSSTransitionGroup
                    component="div"
                    className="players"
                    transitionName="game-ani"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}>
                    {this.renderPlayer(this.props.player1)}
                    {this.renderPlayer(this.props.player2)}
                </CSSTransitionGroup>
                <button className="waves-effect waves-light btn clear-game" onClick={this.props.clearGame}>Clear Game</button>
            </div>
        );
    }
}

export default Game;