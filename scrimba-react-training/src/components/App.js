import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        // state are mutable variables initialised and managed by the component and can be updated everywhere
        // props are immutable variables passed from parent components
        this.state = {
            answer: "Yes"
        };
    }

    render() {
        return (
            <>
                <TestComponent answer={this.state.answer} />
            </>
        );
    }
}

class TestComponent extends Component {
    render() {
        return (
            <>
                <h1>{this.props.answer}</h1>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root")); // note we can't use props on the outermost element

export default App;