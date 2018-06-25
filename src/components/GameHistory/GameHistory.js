import React from 'react';
import FlipMove from 'react-flip-move';
import './GameHistory.css';

const GameHistory = (props) => {
    const games = [...props.games];
    let list;
    if(games.length === 0) {
        list = <h2>no games yet!</h2>
     } else {
        list = games.reverse().map((game) => {
            const winner = props.players[game.winner];
            const loser = props.players[game.loser];
            return (
                <li key={game.timeStamp}>
                    <div className="history-winner">
                        <img src={`/icons/${winner.icon}`} className="player-icon" alt="logo" />
                        <p>{winner.name}</p>
                    </div>
                    <div>{game.gameType}</div>
                    <div className="history-loser">
                        <img src={`/icons/${loser.icon}`} className="player-icon" alt="logo" />
                        <p>{loser.name}</p>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className="GameHistory">
            <h2>game history</h2>
            <div className="GameHistory_title">
                <div className="title winner-title">Winner</div>
                <div id="triangle-right"></div>
                <div id="triangle-left"></div>
                <div className="title loser-title">Loser</div>
            </div>
            <FlipMove
                typeName="ul"
                className="history-list"
            >
                {list}
            </FlipMove>

        </div>
    );
};

export default GameHistory;