import React from 'react';

const GameHistory = (props) => {

    const games = props.games.map((game) => {
        const winner = props.players[game.winner];
        const loser = props.players[game.loser];
        return (
            <li>
                <span>Winner: {winner.name} | Loser: {loser.name}</span>
            </li>
        )
    })
    return (
        <div>
            <h2>game history</h2>
            <ul>
                {games}
            </ul>
        </div>
    );
};

export default GameHistory;