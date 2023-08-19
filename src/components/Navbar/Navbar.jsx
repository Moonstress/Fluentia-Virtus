import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
          
    return (

        <header>
            <div className="left">
                <NavLink to='/categoria/CP'>
                    <div className="nav-item">APRENDE INGLÉS</div>
                </NavLink>
                <NavLink to='/categoria/AM'>
                    <div className="nav-item">ACREDITACIÓN MILITAR</div>
                </NavLink>
                <div className="nav-item">PREPARACIÓN DE EXÁMENES</div>
            </div>
            <Link to="/">
                <div className="middle">Fluentia Virtus</div>
            </Link>
            <div className="right"><CartWidget /></div>
        </header>

    )
}

export default Navbar