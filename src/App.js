import React, { Component } from 'react';
import './css/index.css';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import apiKey from './config.js';

// App components
import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Search from './components/Search';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: "",
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

  performSearch = (query = 'sunrise') => { //fetch data - default "sunrise"
    this.setState({ loading: true });
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
                  images: response.data.photos.photo,
                  searchTerm: query,
                  loading: false
                });
          }
      })
      .catch(error => {console.log("Error getting data", error)});
  }

render () { //add browser router and routes
    return (
      <BrowserRouter basename="/Project-7">
        <div className="container">
          <h2 className="main-title">Image Search</h2>
          <Header />
            {
                (this.state.loading)
                ? <p>Loading...</p>
                : 
            <Switch>
              <Route exact path="/" render={props => <Home {...props} onSearch={this.performSearch} />} />
              <Route path="/search/:topic" render={ () => <Gallery title={this.state.searchTerm} data={this.state.images} />} />
              <Route exact path="/sunrise" render={ () => <Gallery title="Sunrise" data={this.state.sunrise} /> } />
              <Route exact path="/plants" render={ () => <Gallery title="Plants" data={this.state.plants} /> } />
              <Route exact path="/architecture" render={ () => <Gallery title="Architecture" data={this.state.architecture} /> } />
              <Route component={NotFound} />
            </Switch>
            }
        </div>
      </BrowserRouter>
    );
  }
}

/*
Requesting the data
Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.
It is recommended the you use the following link for help with this part of the project, https://www.flickr.com/services/api/explore/flickr.photos.search.
Enter a tag to search for, such as “sunsets.”
You should also limit the number of results to 24 using the per_page argument.
Choose JSON as the output, then “Do not sign call.”
Click “Call Method...” At the bottom of the page, and you’ll see an example of the API call you’ll need to make. You can click on the URL to see what the response will look like.
//export default App  */