import React, { Component } from "react";

class FormAppPractical extends Component {
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
        let genderText = "";
        switch(this.state.gender) {
            case "":
                genderText = "";                break;
            default:
                genderText = `${this.state.gender[0].toLocaleUpperCase()}${this.state.gender.slice(1)}`;
        }
        
        let dietaryRequirements = [];
        if(this.state.dietaryRestrictions.isVegan) dietaryRequirements.push("Vegan");
        if(this.state.dietaryRestrictions.isNutAllergy) dietaryRequirements.push("Nut Allergy");
        if(this.state.dietaryRestrictions.isGlutenAllergy) dietaryRequirements.push("Gluten Allergy");
        dietaryRequirements = dietaryRequirements.join(", ");

        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleFormChange}
                    />
                    <br />
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleFormChange}
                    />
                    <br />
                    <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handleFormChange}
                    />
                    <br />

                    <p>
                        Gender: 
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={this.handleFormChange}
                            /> Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={this.handleFormChange}
                            /> Female
                        </label>
                    </p>

                    <label>Location: 
                        <select
                            name="location"
                            value={this.state.location}
                            onChange={this.handleFormChange}
                            required
                        >
                            <option value="" disabled className="d-none"></option>
                            <option value="UK">UK</option>
                            <option value="US">US</option>
                        </select>
                    </label>
                    <br />
                    
                    <p>Dietary Restrictions:</p>
                    <label>
                        <input
                            name="diet_isVegan"
                            type="checkbox"
                            checked={this.state.dietaryRestrictions.isVegan}
                            onChange={this.handleFormChange}
                        />Vegan
                    </label>
                    <label>
                        <input
                            name="diet_isNutAllergy"
                            type="checkbox"
                            checked={this.state.dietaryRestrictions.isNutAllergy}
                            onChange={this.handleFormChange}
                        />Nut Allergy
                    </label>
                    <label>
                        <input
                            name="diet_isGlutenAllergy"
                            type="checkbox"
                            checked={this.state.dietaryRestrictions.isGlutenAllergy}
                            onChange={this.handleFormChange}
                        />Gluten Allergy
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {genderText}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: {dietaryRequirements}
                </p>
            </main>
        )
    }
}

export default FormAppPractical;