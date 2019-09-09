import React, {Component} from "react";

class NewFeatures extends Component {
    // Making use of class properties to avoid 'this.state' in constructor
    state = {
        firstName: ""
    }

    constructor() {
        // this.handleChange = this.handleChange.bind(this)     not needed when using arrow functions
    }

    // Arrow functions means we can use the lexical this i.e. this refers to surrounding environment
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }
}

export default NewFeatures;

/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 *                https://www.academind.com/learn/react/redux-vs-context-api/ seems to be better than Redux for low-frequenced updates
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */

 /*
 Project ideas:
    https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d
    https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a
    https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d
*/