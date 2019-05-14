import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/sunrise">Sunrise</NavLink></li>
                <li><NavLink to="/plants">Plants</NavLink></li>
                <li><NavLink to="/architecture">Architecture</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;