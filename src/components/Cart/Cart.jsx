import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import React, { useContext, useEffect } from 'react';
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal, initializeCartFromStorage, clearLocalStorage } = useContext(
        CarritoContext
    );

    useEffect(() => {
        initializeCartFromStorage();
    }, []);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito.</h2>
                <Link to="/">Ver Productos</Link>
            </>
        );
    }
    return (
        <div>
            {carrito.map((producto) => (
                <CartItem key={producto.item.id} {...producto} />
            ))}           
            <h3>Cantidad de Productos: {cantidadTotal}</h3>
            <h3>Total: ${total}</h3>
            <div style={{ textAlign: 'right' }}>
            <button className="cartButton"onClick={() => {
                vaciarCarrito();
                clearLocalStorage(); // Call the function to clear local storage
            }}>Vaciar Carrito</button>
            <Link to="/checkout"><button className="cartButton">Finalizar Compra</button></Link>
            </div>
        </div>
    );
}

export default Cart
