import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component { // instead of React.Component, we use a named exported module
    yourMethodHere() {

    }

    render() {
        return (
            <>
                <h1>{this.props.whatever}</h1>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;