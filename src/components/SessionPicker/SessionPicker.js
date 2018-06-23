import React, { Component } from 'react';
import { formatSession } from '../../helpers';
import './SessionPicker.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class SessionPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const sessionId = formatSession(this.state.inputValue);
        this.props.history.push(`/session/${sessionId}`);
    }

    render() {
        return (
            <div>
                <form className="session-picker" onSubmit={this.handleSubmit}>
                    <h2>type in your session name to go to it</h2>
                    <input type="text" required placeholder="Session Name" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}



export default SessionPicker;