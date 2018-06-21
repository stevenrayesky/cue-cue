import React, { Component } from 'react';
import "../PlayerList/PlayerList.css";
import "./AddPlayerForm.css";

class AddPlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            icon: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderIcons = this.renderIcons.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("creating player...");
        const form = event.currentTarget;
        const player = {
            name: this.state.name,
            icon: (this.state.icon) ? this.state.icon : 'person-1.svg',
            winCount: 0,
            lossCount: 0
        }
        this.props.addPlayer(player);
        form.reset();
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    
    renderIcons(icon) {
        return (
            <label key={icon}>
                <input type="radio" name="icon" value={icon} onChange={this.handleChange}/>
                <img src={`/icons/${icon}`} className="player-icon" alt="player logo"/>
            </label>
        )
    }
    
    render() {
        const icons = ['boy.svg', 'girl.svg', 'girl-1.svg', 'man.svg', 'person.svg', 'person-1.svg'];
        return (
            <form className="AddPlayerForm" onSubmit={this.handleSubmit}>
                <div className="icons">
                    {icons.map(this.renderIcons)}
                </div>
                <input required name="name" type="text" placeholder="Player Name" onChange={this.handleChange}/>
                <button className="waves-effect waves-light btn" type="submit">Add Player</button>
            </form>
        );
    }
}

export default AddPlayerForm;