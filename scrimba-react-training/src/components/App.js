import React from 'react';

function MyInfo() {
    return (
        <>
            <div className="container">
                <h1>Foo</h1>
                <p className="mb-0">Bla</p>
            </div>
        </>
    );
}

export default MyInfo;  // the default thing to be exported as opposed to a named thing to be imported e.g. import defaultExport, { namedExport1, namedExport2 };