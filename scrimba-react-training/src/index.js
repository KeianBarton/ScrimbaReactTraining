import React from 'react'; // used to interpret JSX
import ReactDOM from 'react-dom';

// JSX
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));
// You cannot render adjacent JSX elements unless they are wrapped in a single element e.g. ReactDom.Render(<h1>foo</h1><p>bar</p>, ....)