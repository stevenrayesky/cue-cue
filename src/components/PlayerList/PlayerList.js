import React, { Component } from 'react';
import AddPlayerForm from '../AddPlayerForm/AddPlayerForm';

class PlayerList extends Component {
    render() {
        return (
            <div>
                <AddPlayerForm
                    addPlayer={this.props.addPlayer}
                />
            </div>
        );
    }
}

export default PlayerList;