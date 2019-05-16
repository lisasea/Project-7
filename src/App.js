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
import GalleryItem from './components/GalleryItem';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';

// const App = () => (); ??
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
        <Route exact path="/" component={Home} />
        <Route exact path="/sunrise" render={ () => <Sunrise title='Sunrise' />} />
        <Route exact path="/plants" render={ () => <Plants title='Plants' /> } />
        <Route exact path="/architecture" render={ () => <Architecture title='Architecture' /> } />
        <Route component={NotFound} />
      </div>
    </BrowserRouter>
)};

/*
Requesting the data
Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.
It is recommended the you use the following link for help with this part of the project, https://www.flickr.com/services/api/explore/flickr.photos.search.
Enter a tag to search for, such as “sunsets.”
You should also limit the number of results to 24 using the per_page argument.
Choose JSON as the output, then “Do not sign call.”
Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.

*/


export default App;
