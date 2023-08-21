import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

/**
 * A widget displaying the cart icon and the total quantity of items in the cart.
 * @returns {JSX.Element} - JSX element representing the cart widget.
 */
const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to="/cart" className="cart-link">
        <img className="carrito" src="/Carrito.png" alt="Cart" />
        {cantidadTotal > 0 && (
          <div className="cart-item-count">
            <p>{cantidadTotal}</p>
          </div>
        )}
      </Link>
    </div>
  );
};

// PropTypes validation (if applicable)
// No props are used in this component, so PropTypes are not necessary.

export default CartWidget;
