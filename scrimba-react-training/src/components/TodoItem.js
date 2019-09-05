import React, { Component } from "react"

class TodoItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.completed} onChange={() => { this.props.handleChange(item.id)}}/>
                <p>{item.text}</p>
            </div>
        );
    }
}

export default TodoItem;