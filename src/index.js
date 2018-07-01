// Get Access to React using CommonModules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBk6dKj2i4RFlKk2mNtPZyzd-7m-8fImmA';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        YTSearch({ key: API_KEY, term: 'Surfboards' } , data => {
            this.setState({ videos: data });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));