import React, { Component } from "react";

class ConditionalExample extends Component {
    render() {
        return (this.props.isLoading) ? <h1>Loading....</h1> : <h1>Loaded</h1> 
    }
}

export default ConditionalExample;