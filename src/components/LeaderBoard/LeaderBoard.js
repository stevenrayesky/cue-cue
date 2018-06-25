import React, { Component } from 'react';
import "./LeaderBoard.css";
import Streak from "../Streak/Streak";
import { sortLeaders } from '../../helpers';
import { CSSTransitionGroup } from 'react-transition-group';

class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.renderLeaders = this.renderLeaders.bind(this);
    }

    renderLeaders(player){
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
        return (
            <div className="LeaderBoard mobile">
                <h3>leaderboard</h3>
                <CSSTransitionGroup
                    component="ul"
                    transitionName="leader-ani"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}>
                    {Object.values(this.props.players).sort(sortLeaders).map(this.renderLeaders)}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default LeaderBoard;