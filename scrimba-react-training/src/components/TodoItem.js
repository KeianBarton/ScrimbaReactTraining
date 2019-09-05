import React, { Component } from "react"

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: props.item.completed
        }
    }

    render() {
        let item = this.props.item;
        return (
            <div className="todo-item">
                <input type="checkbox" checked={item.completed} onChange={console.log("Changed!")}/>
                <p>{item.text}</p>
            </div>
        );
    }
}

export default TodoItem;