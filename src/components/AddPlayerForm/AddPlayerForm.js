import React, { Component } from 'react';

class AddPlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("creating player...");
        const player = {
            playerName: this.state.playerName
        }
        console.log(player);
        this.props.addPlayer(player);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="playerName" type="text" placeholder="Player Name" onChange={this.handleChange}/>
                <button type="submit">Add Player</button>
            </form>
        );
    }
}

export default AddPlayerForm;