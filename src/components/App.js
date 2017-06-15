import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li><a href="">Link</a></li>
                        </ul>
                    </nav>
                </header>
                <main id="main">
                    <section>
                        <h1>Headline One</h1>
                        <div className="story">
                            <h2>Headline Two</h2>
                            <picture>
                                <source srcset="http://lorempixel.com/300/169/city" media="(min-width: 500px)"/>
                                <source srcset="http://lorempixel.com/480/270/city" media="(min-width: 700px)"/>
                                <source srcset="http://lorempixel.com/640/360/city" media="(min-width: 900px)"/>
                                <img src="http://lorempixel.com/720/405/city" className="img-responsive"
                                     alt="lorempixel"/>
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
        );
    }
}

export default App;
