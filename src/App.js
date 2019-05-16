import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import apiKey from './config.js';

// App components
import Gallery from './components/Gallery';
import GalleryItem from './components/GalleryItem';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';

// const App = () => (); ??
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      sunrise: [],
      plants: [],
      architecture: [],
      loading: true
    };
  };

  componentDidMount() { 

  }

  performSearch = (query) => { //fetch data
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error getting data', error);
      });
  }

render () { //add browser router and routes
  console.log(this.state.images); //in console see if 24 objects were fetched from API
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search onSearch={this.performSearch} /> 
          <Route exact path="/" component={Home} />
          <Route exact path="/sunrise" render={ () => <Sunrise title='Sunrise' />} />
          <Route exact path="/plants" render={ () => <Plants title='Plants' /> } />
          <Route exact path="/architecture" render={ () => <Architecture title='Architecture' /> } />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

/*

  render() {
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
  }
};
Requesting the data
Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.
It is recommended the you use the following link for help with this part of the project, https://www.flickr.com/services/api/explore/flickr.photos.search.
Enter a tag to search for, such as “sunsets.”
You should also limit the number of results to 24 using the per_page argument.
Choose JSON as the output, then “Do not sign call.”
Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.
//export default App  */