import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { formatSession, sessionName } from '../../helpers';
import './SessionPicker.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class SessionPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: sessionName()};

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
                <nav className="nav-wrapper nav-desktop">
                    <Link to="/">
                        <div className="logo">
                            <div className="logo-c">
                                <div className="cue">CUE</div>
                                <div className="first-c">C</div>
                            </div>
                        </div>
                    </Link>
                </nav>
                <form className="session-picker" onSubmit={this.handleSubmit}>
                    <h2>create a new session!</h2>
                    <input type="text" required placeholder="Session Name" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button className="btn" type="submit">Submit</button>
                </form>
                <Footer/>
            </div>
        );
    }
}



export default SessionPicker;