// Get Access to React using CommonModules
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBk6dKj2i4RFlKk2mNtPZyzd-7m-8fImmA';

// Create a new Component. It should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

//Put the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));