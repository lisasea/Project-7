import React from 'react';
import Search from './Search';
import Nav from './Nav';

const Home = props => {
    return(
        <div className="main-content">
            <h2>Search Images by Topic</h2>
            <p>This app was built using React, React Router and Axios.</p>
            <Search history={props.history}
                    onSearch={props.onSearch}/>
        </div>
    );
}

export default Home;