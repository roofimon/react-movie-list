import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

const App = () => {
    //return <h1>Movie List</h1>;
    return  <List />
};

ReactDOM.render(<App />, document.getElementById('root'));