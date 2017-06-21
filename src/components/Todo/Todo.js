import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            text: '',
            placeholder: 'Add a todo..'
        };
    }

    render() {
        return (
            <main id="content" className="main">
                <section className="todo-section">
                    <h3>TODO</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} value={this.state.text} placeholder={this.state.placeholder} />
                        <button>{'Add #' + (this.state.items.length + 1)}</button>
                    </form>
                    <hr/>
                    <TodoList items={this.state.items} />
                </section>
            </main>
        );
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default Todo;