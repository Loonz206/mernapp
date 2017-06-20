import React, { Component } from 'react';

class Todo extends Component {
    render(){
        return (
            <main id="content" className="main">
                <section>
                    <h1>Todo</h1>
                    <div className="story">
                        <h2>Headline Two</h2>
                        <picture>
                            <source srcSet="http://lorempixel.com/400/225/animals" media="(max-width:400px)"/>
                            <source srcSet="http://lorempixel.com/600/338/city" media="(max-width:600px)"/>
                            <img src="http://lorempixel.com/705/405/sports" className="img-responsive"
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
        )
    }
}

export default Todo;