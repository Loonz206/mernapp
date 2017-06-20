import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import About from './About/About';
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
            <Router>
                <div className="app-container">
                    <div className={this.state.condition ? 'wrap active' : 'wrap'} id="wrap">
                        <header>
                            <a href="#menu" className={this.state.condition ? 'menu-link active' : 'menu-link'} onClick={this.handleClick}>
                                Menu &#9776;
                            </a>
                            <Nav/>
                        </header>
                        {/*All Views for the guts go in here*/}
                        <Route exact path="/" component={Main}/>
                        <Route path="/about" component={About}/>
                        <Footer date={new Date()}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
