import React, { Component } from "react"

class TodoItem extends Component {
    render() {
        let item = this.props.item;
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input type="checkbox" checked={item.completed} onChange={() => { this.props.handleChange(item.id)}}/>
                <p style={item.completed ? completedStyle : null}>{item.text}</p>
            </div>
        );
    }
}

export default TodoItem;