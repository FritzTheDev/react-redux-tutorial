// Get Access to React using CommonModules
import React from 'react';

// Create a new Component. It should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

//Put the component's generated HTML into the DOM
React.render(App);