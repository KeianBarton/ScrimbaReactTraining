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
            dietary_vegan: false,
            dietary_nuts: false,
            dietary_gluten: false
        };

        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            this.setState({
                [name]: checked
            });
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
        let dietaryRequirements = Object.keys(this.state)
            .filter((dietaryProperty) => this.state[dietaryProperty])
            .filter((stateProperty) => stateProperty.startsWith("dietary_"))
            .map((dietaryReq) => dietaryReq.slice("dietary_".length))
            .map(dietaryReq => `${dietaryReq[0].toLocaleUpperCase()}${dietaryReq.slice(1)}`)
            .join(", ");

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
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={this.handleFormChange}
                        />
                        <label>Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={this.handleFormChange}
                        />
                        <label>Female</label>
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
                    <label>Vegan
                        <input
                            name="dietary_vegan"
                            type="checkbox"
                            checked={this.state.dietary_vegan}
                            onChange={this.handleFormChange}
                        />
                    </label>
                    <label>Nut Allergy
                        <input
                            name="dietary_nuts"
                            type="checkbox"
                            checked={this.state.dietary_nuts}
                            onChange={this.handleFormChange}
                        />
                    </label>
                    <label>Gluten Allergy
                        <input
                            name="dietary_gluten"
                            type="checkbox"
                            checked={this.state.dietary_gluten}
                            onChange={this.handleFormChange}
                        />
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