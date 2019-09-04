import React from "react";

function MainContent() {
    const firstName = "Bob";
    const lastName = "Ziroll";

    const styles = {
        color: "#FF0000",
        backgroundColor: "#00FFFF",
        fontSize: 24  // or "24px etc"
    };

    return (
        // We have to use className as JSX is actually using the JavaScript DOM API underneath the hood (document.getElementById(..).className ...)
        <main>
            <p className="mb-0" style={styles}>Hello {`${firstName} ${lastName}`}!</p>
        </main>
    );
};

export default MainContent;