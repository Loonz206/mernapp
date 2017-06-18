import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return (
            <nav id="menu">
                <ul className="left-nav">
                    <li><a href="">
                        <img src="https://placehold.it/230x32" alt=""/>
                    </a></li>
                </ul>
                <ul className="right-nav">
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