import React, {Component} from 'react';
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
                        <nav id="menu">
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main id="content" className="main">
                        <section>
                            <h1>Headline One</h1>
                            <div className="story">
                                <h2>Headline Two</h2>
                                <picture>
                                    <source srcSet="https://placehold.it/400x300" media="(max-width:600px)"/>
                                    <img src="https://placehold.it/705x405" className="img-responsive"
                                         alt="placeholder"/>
                                </picture>
                                <p>
                                    <cite>Some Author - </cite>
                                    Some other words and works
                                </p>
                            </div>
                        </section>
                        <aside>
                            <h3>Headline Three</h3>
                            <ul>
                                <li>Some Thing</li>
                            </ul>
                        </aside>
                    </main>
                    <footer>
                        <p className="center">Copyright 1980-{this.props.date.getFullYear()} ©</p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
