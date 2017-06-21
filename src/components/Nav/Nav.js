import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav id="menu">
                <ul className="left-nav">
                    <li><NavLink exact activeClassName="active" to="/">React Playground</NavLink></li>
                </ul>
                <ul className="right-nav">
                    <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/todo">Todo</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;