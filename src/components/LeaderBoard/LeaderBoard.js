import React, { Component } from 'react';
import "./LeaderBoard.css";
import Streak from "../Streak/Streak";
import { sortLeaders } from '../../helpers';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.renderLeaders = this.renderLeaders.bind(this);
    }

    renderLeaders(player){
        // const player = this.props.players[key];
        const streak = (player.streak > 2) ? <Streak streak={player.streak}/> :'';
        if(player.winCount > 0) {
            return (
                <li key={player.name}>
                <img src={`/icons/${player.icon}`} className="player-icon" alt="logo" />
                <p>{player.name} Wins: <span>{player.winCount}</span></p>
                {streak}
                </li>
            );
        }
    }

    render() {
        console.log(Object.keys(this.props.players).sort(sortLeaders))
        return (
            <div className="LeaderBoard mobile">
                <h3><span>Leader</span><span>Board</span></h3>
                <ul>
                    {Object.values(this.props.players).sort(sortLeaders).map(this.renderLeaders)}
                </ul>
            </div>
        );
    }
}

export default LeaderBoard;