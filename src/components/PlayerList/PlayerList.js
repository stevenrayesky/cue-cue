import React, { Component } from 'react';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';
import "./PlayerList.css";
import { CSSTransitionGroup } from 'react-transition-group';

class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.renderPlayers = this.renderPlayers.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        this.props.setPlayer(key)
    }

    renderPlayers(key) {
        if(key === this.props.player1 || key === this.props.player2) return;
        const player = this.props.players[key];
        return (
            
            <li key={key} onClick={(e) => this.handleClick(key)}>
                <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                <p>{player.name}</p>
                <p>Record: {player.winCount} - {player.lossCount}</p>
            </li>
            
        )
    }

    render() {
        return (
            <div className="PlayerList mobile">
                <h3>Player List</h3>
                <AddPlayerForm
                    addPlayer={this.props.addPlayer}
                />
                <CSSTransitionGroup
                    component="ul"
                    transitionName="player-ani"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}>
                        {Object.keys(this.props.players).map(this.renderPlayers)}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default PlayerList;