import React, { Component } from "react"

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: props.item.completed
        }
        this.handleSelectionChange = this.handleSelectionChange.bind(this); // binding "this" within handleSelectionChange to be the "this" referring to this instance
    }

    handleSelectionChange() {
        this.setState(prevState => { return { completed: !prevState.completed }; }); // use argument to access previous state
    }

    render() {
        let item = this.props.item;
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.state.completed} onChange={this.handleSelectionChange}/>
                <p>{item.text}</p>
            </div>
        );
    }
}

export default TodoItem;