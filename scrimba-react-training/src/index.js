import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

// JSX
ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
);