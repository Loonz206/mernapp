import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './App.scss';

class App extends Component {
    constructor(){
        super();
        this.state = {
            condition: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        e.preventDefault();
        this.setState({
            condition: !this.state.condition
        })
    }
    componentDidMount(){
        let body = document.body;
        body.classList.add('js');
    }
    render() {
        return (
            <div className="app-container">
                <div className={this.state.condition ? 'wrap active' : 'wrap'} id="wrap">
                    <header>
                        <a href="#menu" className={this.state.condition ? 'menu-link active' : 'menu-link'} onClick={this.handleClick}>
                            Menu &#9776;
                        </a>
                        <Nav/>
                    </header>
                    <Main/>
                    <Footer date={new Date()}/>
                </div>
            </div>
        );
    }
}

export default App;
