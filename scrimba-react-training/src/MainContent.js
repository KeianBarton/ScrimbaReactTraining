import React from "react";

function MainContent() {
    return (
        // We have to use className as JSX is actually using the JavaScript DOM API underneath the hood (document.getElementById(..).className ...)
        <main>
            <p className="mb-0">Main content</p>
        </main>
    );
};

export default MainContent;