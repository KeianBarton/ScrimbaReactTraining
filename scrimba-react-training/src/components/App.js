import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component { // instead of React.Component, we use a named exported module
    yourMethodHere() {

    }

    render() {
        return (
            <>
                <TestComponent whatever="foo" />
            </>
        );
    }
}

class TestComponent extends Component {
    render() {
        return (
            <>
                <h1>{this.props.whatever}</h1>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); // note we can't use props on the outermost element

export default App;