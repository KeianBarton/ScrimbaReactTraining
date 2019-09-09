import React, { Component } from "react";

import ConditionalExample from "./ConditionalExample";
import FormContainer from "./FormContainer";
import TodoItem from "./TodoItem";
import MemeHeader from "./MemeHeader";
import MemeGenerator from "./MemeGenerator";

import todosData from "../todosData";

class App extends Component {

    // https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    // https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
    // React Lifecycle methods

    constructor(props) {
        super(props);
        this.state = {
            todos: todosData,
            isLoading: false,
            starWarsCharacter: {},
            firstName: "",
            lastName: "",
            textArea: "",
            checkBoxExample: false,
            radioExampleGender: "",
            favColor: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormFirstNameChange = this.handleFormFirstNameChange.bind(this);
        this.betterFormHandleChange = this.betterFormHandleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return updatedTodos;
        });
    }

    handleFormFirstNameChange(event) {
        let target = event.target;
        this.setState(prevState => {
            prevState.firstName = target.value;
            return prevState;
        });
    }

    betterFormHandleChange(event) {
        const {name, value, type, checked} = event.target; // have a search for React synthetic events

        type === "checkbox" ? 
        this.setState(prevState => {
            prevState[name] = checked;
            return prevState;
        })      
        : this.setState(prevState => {
            prevState[name] = value;
            return prevState;
        });
    }

    // Forms
    // https://reactjs.org/docs/forms.html

    // Just mounted to screen - very first time component shown on scren
    componentDidMount() {
        // fetch
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
        // testing with star wars API - https://swapi.co
        // promises - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
        this.setState(prevState => {
            prevState.isLoading = true;
            return prevState;
        })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(jsonData => {
                this.setState(prevState => {
                    prevState.starWarsCharacter = jsonData;
                    prevState.isLoading = false;
                    return prevState;
                });
            });
    }



    // TO BE DEPRECATED - Props received from parent component - runs on mount and every time props changed
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }
    UNSAFE_componentWillMount() {
    }
    UNSAFE_componentWillUpdate() {
    }

    // You probably don't need this method:
    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // not commonly used
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }



    // Invoked before rendering when new props or state are received - defaults to true - not called when forceUpdate is used
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    // Invoked when component unmounts from screen
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listener)
    }

    handleSubmit(event) {
        // submit data to API etc
    }

    // Any time React determines state or props changes, ernder is run
    render = () => {
        let todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        let loadingText = this.state.isLoading ? "Loading..." : this.state.starWarsCharacter.name;
        return <>
            <MemeHeader />
            <MemeGenerator />
            <br />
            {/*this.state.isLoading && <h1>Loading...</h1>     && JavaScript example*/}
            {this.state.isLoading ? <h1>Loading...</h1> : <ConditionalExample />}
            {/*<ConditionalExample isLoading={this.state.isLoading} />*/}
            <div className="todo-list">
                {todoItems}
            </div>
            <p>{loadingText}</p>
            <form>
                <input type="text" placeholder="First Name" onChange={this.handleFormFirstNameChange} />
                <p>State: {this.state.firstName}</p>
            </form>
            <form onSubmit={this.handleFormSubmit}>
                {/* By using 'value', we use controlled form to ensure state is the single source of truth */ }
                <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.betterFormHandleChange} />
                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.betterFormHandleChange} />
                <p>State: {this.state.firstName} {this.state.lastName}</p>

                {/* text area in React is a self closing element */}
                <textarea
                    name="textArea"
                    value={this.state.textArea}
                    onChange={this.betterFormHandleChange}
                />
                <p>State: {this.state.textArea}</p>

                <input
                    name="checkBoxExample"
                    type="checkbox"
                    checked={this.state.checkBoxExample}
                    onChange={this.betterFormHandleChange}
                />

                <br />
                <label>
                    <input
                        name="radioExampleGender"
                        type="radio"
                        value="male"
                        checked={this.state.radioExampleGender === "male"}
                        onChange={this.betterFormHandleChange}
                    /> Male
                </label>
                <label>
                    <input
                        name="radioExampleGender"
                        type="radio"
                        value="female"
                        checked={this.state.radioExampleGender === "female"}
                        onChange={this.betterFormHandleChange}
                    /> Female
                </label>
                <label>
                    <input
                        name="radioExampleGender"
                        type="radio"
                        value="other"
                        checked={this.state.radioExampleGender === "other"}
                        onChange={this.betterFormHandleChange}
                    /> Other
                </label>

                {/* Simple React forms library - Formik */}

                <br />
                <label>Favourite Colour:</label>
                <select
                    name="favColor"
                    value={this.state.favColor}
                    onChange={this.betterFormHandleChange}
                >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>

                <button>Submit</button> {/* in HTML5, a button will automatically submit so you don't always need <input type="submit" ...></input>*/}
            </form>

            <br />
            <hr />
            <FormContainer />
        </>;
    }


}

export default App;