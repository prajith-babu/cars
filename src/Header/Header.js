import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.jpg';
import './Header.css';
import { headerConstants } from '../Constants/Constants';
const Header = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">{headerConstants.home}</Link></li>
                <li><Link to="/services">{headerConstants.cars}</Link></li>
            </ul>
        </nav>
    );
}

export default Header;