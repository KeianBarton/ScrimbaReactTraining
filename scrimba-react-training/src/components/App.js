import React, { Component } from "react";

import TodoItem from "./TodoItem";
import todosData from "../todosData";

class App extends Component {

    // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
    // React Lifecycle methods

    constructor(props) {
        super(props);
        this.state = { todos: todosData };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return updatedTodos;
        });
    }

    // Just mounted to screen - very first time component shown on scren
    componentDidMount() {
        // GET the data I need to correctly display
    }


    // TO BE DEPRECATED - Props received from parent component - runs on mount and every time props changed
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }

    // Invoked before rendering when new props or state are received - defaults to true - not called when forceUpdate is used
    shouldComponentUpdate(nextProps, nextState) {
    }

    // Invoked when component unmounts from screen
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listener)
    }

    // Any time React determines state or props changes, ernder is run
    render = () => {
        let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        return <>
            <div className="todo-list">
                {todoItems}
            </div>
        </>;
    }


}

export default App;