import React from 'react';
import {NavLink} from 'react-router-dom';
 
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/users'>
                    Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                    Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;