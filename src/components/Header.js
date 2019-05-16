import React from 'react';
import Nav from './Nav';
// above: import { NavLink } fr...

// alt for below:  <h1>{ props.title }</h1> 
const Header = (props) => {
    return(
        <div>
            <h1>React Gallery</h1> 
            <Nav reset={props.reset} />
        </div>
    )
};

export default Header;
//app title

//logo

//footer

//nav

// search bar







