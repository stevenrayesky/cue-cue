import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import SessionPicker from '../SessionPicker/SessionPicker';
import './Header.css';
import '../App/App.css';

class Header extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const tab = e.currentTarget.getAttribute('name');
        console.log(`${tab}`);
        this.props.changeTab(tab);
    }
    render(){
        return (
            <div className="mobile">
                <nav className="nav-wrapper main-nav">
                    <Link to="/">
                        <div className="logo">
                            <div className="logo-c">
                                <div className="cue">CUE</div>
                                <div className="first-c">C</div>
                            </div>
                        </div>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">New Session</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-wrapper nav-mobile">
                    <ul className="nav-ul">
                        <li><a name="PlayerList" onClick={this.handleClick}>Player List</a></li>
                        <li><a name="Game" onClick={this.handleClick}>Game</a></li>
                        <li><a name="LeaderBoard" onClick={this.handleClick}>Leaderboard</a></li>
                    </ul>
                </nav>
                <Route exact path="/" component={SessionPicker}/>
            </div>
        );
    }
};

export default Header;