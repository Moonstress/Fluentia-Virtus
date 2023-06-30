import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

const Navbar = () => {
    return (

        <header>
            <div className="left">
            <div className="nav-item">PRODUCTOS</div>
            <div className="nav-item">SOBRE MÍ</div>
            <div className="nav-item">CONTACTO</div>
            </div>
            <div className="middle">Fluentia Virtus</div>
            <div className="right"><CartWidget/></div>
            
        </header>

    )
}

export default Navbar