import React, { Component } from 'react';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';
import "./PlayerList.css";

class PlayerList extends Component {
    constructor(props) {
        super(props);

        this.renderPlayers = this.renderPlayers.bind(this);
    }
    renderPlayers(key) {
        const player = this.props.players[key];
        return (
            <li key={key}>
                <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                <span>{player.name}</span>
            </li>
        )
    }

    render() {
        return (
            <div>
                <AddPlayerForm
                    addPlayer={this.props.addPlayer}
                />
                <ul>
                    {Object.keys(this.props.players).map(this.renderPlayers)}
                </ul>
            </div>
        );
    }
}

export default PlayerList;