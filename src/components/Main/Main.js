import React, { Component } from 'react';

class Main extends Component {
    render (){
        return (
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
        )
    }
}

export default Main;