import { Component } from "react";

class App extends Component { // instead of React.Component, we use a named exported module
    yourMethodHere() {

    }

    render() {
        return
            <>
                <h1>{this.props.whatever}</h1>
            </>;
    }
}

export default App;