import React from 'react'
import {Link} from 'react-router-dom';
import logo2 from '../logo2.svg';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-center">
                <Link to="/">
                    <img src={logo2} alt="cocktail db logo" className="logo"></img>
                </Link>
                <ul className="nav-links">
                    <li>
                       <Link to="/">Home</Link> 
                    </li> 
                    <li>
                       <Link to="/about">About</Link> 
                    </li> 
                    

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

