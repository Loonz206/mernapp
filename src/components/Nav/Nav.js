import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return (
            <nav id="menu">
                <ul className="left-nav">
                    <li><a href="">React Playground</a></li>
                </ul>
                <ul className="right-nav">
                    <li><a href="">To-do Application</a></li>
                    <li><a href="">Chat</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;