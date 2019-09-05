import React, { Component } from "react";

import TodoItem from "./TodoItem";
import todosData from "../todosData";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { todoItems: todosData.map(item => <TodoItem key={item.id} item={item} />)};
    }

    render = () => <div className="todo-list">{this.state.todoItems}</div>;

}

export default App;