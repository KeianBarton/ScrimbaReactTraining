import React, { Component } from "react";

import TodoItem from "./TodoItem";
import todosData from "../todosData";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { todos: todosData };
    }

    handleClick = () => alert("Button Clicked!");

    render = () => {
        let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />);
        return <>
            <div className="todo-list">
                {todoItems}
            </div>
            <button onClick={this.handleClick}>Click Me</button>
        </>;
    }

}

export default App;