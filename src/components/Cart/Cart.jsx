import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes for documenting props
import CartItem from '../CartItem/CartItem';
import { CarritoContext } from '../../context/CarritoContext';
import './Cart.css';

/**
 * Cart component displays the items in the cart along with total and checkout options.
 * @component
 */
const Cart = () => {
    const {
        carrito,
        vaciarCarrito,
        total,
        cantidadTotal,
        initializeCartFromStorage,
        clearLocalStorage,
    } = useContext(CarritoContext);

    useEffect(() => {
        initializeCartFromStorage();
    }, []);

    // If the cart is empty, display a message and a link to products
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
                <button
                    className="cartButton"
                    onClick={() => {
                        vaciarCarrito();
                        clearLocalStorage(); // Call the function to clear local storage
                    }}
                >
                    Vaciar Carrito
                </button>
                <Link to="/checkout">
                    <button className="cartButton">Finalizar Compra</button>
                </Link>
            </div>
        </div>
    );
};

// Prop types for documentation
Cart.propTypes = {
    // No props are required for this component
};

export default Cart;
