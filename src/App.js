import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import apiKey from './config.js';

// App components
import Gallery from './components/Gallery';
import Gallery from './components/Gallery';
import Gallery from './components/Gallery';

class App extends Component {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
)};

render () {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={} />
      </div>
    </BrowserRouter>
)};



export default App;
