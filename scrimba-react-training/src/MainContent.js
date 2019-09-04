import React from "react";

function MainContent() {
    const firstName = "Bob";
    const lastName = "Ziroll";

    return (
        // We have to use className as JSX is actually using the JavaScript DOM API underneath the hood (document.getElementById(..).className ...)
        <main>
            <p className="mb-0" style={{color: blue, backgroundColor: black}}>Hello {`${firstName} ${lastName}`}!</p>
        </main>
    );
};

export default MainContent;