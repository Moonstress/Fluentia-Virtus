import React, { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { CarritoContext } from '../../context/CarritoContext';
import "./CartItem.css"

/**
 * Represents an item in the shopping cart.
 * @param {Object} props - The props object containing the item and its quantity.
 * @param {Object} props.item - The item details.
 * @param {number} props.cantidad - The quantity of the item.
 * @returns {JSX.Element} - JSX element representing the cart item.
 */
const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="productsCart">
      <h4>{item.nombre}</h4>
      <div className="item-info">
        <div>
          <p>Cantidad: {cantidad}</p>
        </div>
        <div>
          <p>Precio: {item.precio}</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
      </div>
    </div>
  );
};

// PropTypes validation for props
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  cantidad: PropTypes.number.isRequired,
};

export default CartItem;
