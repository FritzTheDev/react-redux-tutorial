// Get Access to React using CommonModules
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBk6dKj2i4RFlKk2mNtPZyzd-7m-8fImmA';

YTSearch({key: API_KEY, term: 'Surfboards'}, function(data) {
    console.log(data);
});
// Create a new Component. It should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

//Put the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));