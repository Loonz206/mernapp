import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav id="menu">
                <ul className="left-nav">
                    <li><Link to="/">React Playground</Link></li>
                </ul>
                <ul className="right-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;