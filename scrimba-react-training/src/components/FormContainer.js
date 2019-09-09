import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            dietaryRestrictions: {
                isVegan: false,
                isNutAllergy: false,
                isGlutenAllergy: false
            }
        };

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox" && name.startsWith("diet_")) {
            this.setState(prevState => prevState.dietaryRestrictions[name.slice("diet_".length)] = checked);
            return;
        }

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            // https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
            <FormComponent
                handleFormChange={this.handleFormChange}
                data={this.state}
            />
        );
    }
}

export default FormContainer;