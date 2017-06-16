import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return (
            <nav id="menu">
                <ul className="pull-left">
                    <li><a href="">Lenny Peters</a></li>
                </ul>
                <ul>
                    <li><a href="">To-do Application</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Examples</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;