import React, { Component } from 'react';
import './css/index.css';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
//import logo from './logo.svg';
import apiKey from './config.js';

// App components
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
//import Nav from './components/Nav';
import NotFound from './components/NotFound';
//import NoResults from './components/NoResults';
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
  }

  componentDidMount() { 
    this.performSearch("");
    this.performSearch("sunrise");
    this.performSearch("plants");
    this.performSearch("architecture");
  }

  performSearch = (query =) => { //fetch data -does this need default "sunrise"
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          if (query === "sunrise") {
                this.setState({ sunrise: response.data.photos.photo, loading: false});
          } else if (query === "plants") {
                this.setState({ plants: response.data.photos.photo, loading: false});
          } else if (query === "architecture") {
                this.setState({ architecture: response.data.photos.photo, loading: false});
          } else {
                this.setState({
                  images: response.data.data,
                  loading: false
                });
          }
      })
      .catch(error => {console.log("Error getting data", error)});
  }

render () { //add browser router and routes
  console.log(this.state.images); //in console see if 24 objects were fetched from API
    return (
      <BrowserRouter basename="/Project-7">
        <div className="container">
          <Header />
          <Search onSearch={this.performSearch} /> 

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sunrise" render={ () => <Gallery title="Sunrise" date="this.state.sunrise" /> } />
              <Route exact path="/plants" render={ () => <Gallery title="Plants" data="this.state.plants" /> } />
              <Route exact path="/architecture" render={ () => <Gallery title="Architecture" data="this.state.architecture" /> } />
              <Route component={NotFound} />
              <Gallery data={this.state.images} />

              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Gallery data={this.state.images}/>
              }

            </Switch>
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