import React, { Component } from "react";

import TodoItem from "./TodoItem";
import ConditionalExample from "./ConditionalExample";
import todosData from "../todosData";

class App extends Component {

    // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
    // React Lifecycle methods

    constructor(props) {
        super(props);
        this.state = { todos: todosData, isLoading: true };
        this.handleChange = this.handleChange.bind(this);
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1500);
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
    UNSAFE_componentWillMount() {
    }
    UNSAFE_componentWillUpdate() {
    }

    // You probably don't need this method:
    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // not commonly used
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
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
            <ConditionalExample isLoading={this.state.isLoading} />
            <div className="todo-list">
                {todoItems}
            </div>
        </>;
    }


}

export default App;