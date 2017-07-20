import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

class NavMenu extends Component {
    render() {
        return (
            <nav id="navmenu">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/roster'>Roster</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                </ul>
            </nav>

        );
    }
}

export default NavMenu;