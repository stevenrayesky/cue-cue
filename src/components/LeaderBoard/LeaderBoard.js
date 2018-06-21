import React, { Component } from 'react';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.renderLeaders = this.renderLeaders.bind(this);
    }

    renderLeaders(key){
        console.log("renderLeaders")
        const player = this.props.players[key];
        console.log(player);
        if(player.winCount > 0) {
            return (
                <li key={key} onClick={(e) => this.handleClick(key)}>
                <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                <p>{player.name} Wins: <span>{player.winCount}</span></p>
                </li>
            );
        }
    }

    render() {
        return (
            <div className="LeaderBoard">
                <h2>LeaderBoard</h2>
                <ul>
                    {Object.keys(this.props.players).map(this.renderLeaders)}
                    
                </ul>
            </div>
        );
    }
}

export default LeaderBoard;