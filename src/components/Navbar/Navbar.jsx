import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';

/**
 * Navbar component that displays the header section of the website.
 */
const Navbar = () => {
    return (
        <header>
            {/* Left section containing navigation links */}
            <div className="left">
                <NavLink to="/categoria/CP">
                    <div className="nav-item">APRENDE INGLÉS</div>
                </NavLink>
                <NavLink to="/categoria/AM">
                    <div className="nav-item">ACREDITACIÓN MILITAR</div>
                </NavLink>
                <div className="nav-item">PREPARACIÓN DE EXÁMENES</div>
            </div>

            {/* Middle section with the brand link */}
            <Link to="/">
                <div className="middle">Fluentia Virtus</div>
            </Link>

            {/* Right section containing the cart widget */}
            <div className="right">
                <CartWidget />
            </div>
        </header>
    );
};

export default Navbar;
