import React, { Component } from "react";

class MemeHeader extends Component {
    render() {
        return (
            <header>
                <img
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="Problem?"
                />
                <p className="d-inline">Meme Generator</p>
            </header>
        );
    }
}

export default MemeHeader;