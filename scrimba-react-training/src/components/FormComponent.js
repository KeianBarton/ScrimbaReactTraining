import React, { Component } from "react";

class FormComponent extends Component {
    render() {
        let genderText = "";
        switch(this.props.data.gender) {
            case "":
                genderText = "";                break;
            default:
                genderText = `${this.props.data.gender[0].toLocaleUpperCase()}${this.props.data.gender.slice(1)}`;
        }
        
        let dietaryRestrictions = [];
        if(this.props.data.dietaryRestrictions.isVegan) dietaryRestrictions.push("Vegan");
        if(this.props.data.dietaryRestrictions.isNutAllergy) dietaryRestrictions.push("Nut Allergy");
        if(this.props.data.dietaryRestrictions.isGlutenAllergy) dietaryRestrictions.push("Gluten Allergy");
        dietaryRestrictions = dietaryRestrictions.join(", ");

        return (
            <>
                <form>
                    <input
                        name="firstName"
                        type="text"
                        value={this.props.data.firstName}
                        placeholder="First Name"
                        onChange={this.props.handleFormChange}
                    />
                    <br />
                    <input
                        name="lastName"
                        type="text"
                        value={this.props.data.lastName}
                        placeholder="Last Name"
                        onChange={this.props.handleFormChange}
                    />
                    <br />
                    <input
                        name="age"
                        type="number"
                        value={this.props.data.age}
                        placeholder="Age"
                        onChange={this.props.handleFormChange}
                    />
                    <br />

                    <p>
                        Gender: 
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={this.props.handleFormChange}
                            /> Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={this.props.handleFormChange}
                            /> Female
                        </label>
                    </p>

                    <label>Location: 
                        <select
                            name="location"
                            value={this.props.data.location}
                            onChange={this.props.handleFormChange}
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
                            checked={this.props.data.dietaryRestrictions.isVegan}
                            onChange={this.props.handleFormChange}
                        />Vegan
                    </label>
                    <label>
                        <input
                            name="diet_isNutAllergy"
                            type="checkbox"
                            checked={this.props.data.dietaryRestrictions.isNutAllergy}
                            onChange={this.props.handleFormChange}
                        />Nut Allergy
                    </label>
                    <label>
                        <input
                            name="diet_isGlutenAllergy"
                            type="checkbox"
                            checked={this.props.data.dietaryRestrictions.isGlutenAllergy}
                            onChange={this.props.handleFormChange}
                        />Gluten Allergy
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.props.data.firstName} {this.props.data.lastName}</p>
                <p>Your age: {this.props.data.age}</p>
                <p>Your gender: {genderText}</p>
                <p>Your destination: {this.props.data.location}</p>
                <p>
                    Your dietary restrictions: {dietaryRestrictions}
                </p>
            </>
        );
    }
}

export default FormComponent;