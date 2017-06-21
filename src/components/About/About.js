import React, { Component } from 'react';

class About extends Component {
    render(){
        return (
            <main id="content" className="main">
                <section>
                    <h1>About</h1>
                    <div className="story">
                        <h2>Lenny Peters</h2>
                        <picture>
                            <source srcSet="http://lorempixel.com/400/225/animals" media="(max-width:400px)"/>
                            <source srcSet="http://lorempixel.com/600/338/city" media="(max-width:600px)"/>
                            <img src="http://lorempixel.com/705/405/sports" className="img-responsive"
                                 alt="placeholder"/>
                        </picture>
                        <p>Lenny Peters. That's my name. This is an basic setup of React, React-Router using ES6 Syntax with a Babel Compiler.
                        I will be adding more views into the navigation scheme to demonstrate mini-applications.</p>
                    </div>
                </section>
                <aside>
                    <h3>Headline Three</h3>
                    <ul>
                        <li>Some Thing</li>
                    </ul>
                </aside>
            </main>
        )
    }
}

export default About;