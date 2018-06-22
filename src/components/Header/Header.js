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
                <h1>CUECUE</h1>
                <nav className="nav-wrapper nav-desktop">
                    <ul>
                        <li>
                            <Link to="/">New Session</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-wrapper nav-mobile">
                    <ul className="nav-ul">
                        <li>
                            <Link to="/">New Session</Link>
                        </li>
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