import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import './ItemDetail.css';

/**
 * A component for displaying item details and managing quantity.
 * @param {Object} props - The props object containing item details.
 * @param {number} props.id - The unique ID of the item.
 * @param {number} props.stock - The available stock of the item.
 * @param {string} props.img - The URL of the item image.
 * @param {string} props.nombre - The name of the item.
 * @param {string} props.descripcion - The description of the item.
 * @param {number} props.precio - The price of the item.
 * @returns {JSX.Element} - JSX element representing the item details.
 */
const ItemDetail = ({ id, stock, img, nombre, descripcion, precio }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const handleCantidadChange = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log('Productos Agregados: ' + cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className='contenedorItem'>
      <div className='table'>
        <img src={img} alt={nombre} className="imgDetail" />
      </div>
      <div className='table'>
        <h2>Nombre: {nombre}</h2>
        <div dangerouslySetInnerHTML={{ __html: descripcion }} />
        <h2>Precio: {precio}</h2>
        {agregarCantidad > 0 ? (
          <Link to="/cart">
            <button className="btn btn-primary finalizarCompra">
              Continuar Compra
            </button>
          </Link>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={handleCantidadChange} />
        )}
      </div>
    </div>
  );
};

// PropTypes validation
ItemDetail.propTypes = {
  id: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
};

export default ItemDetail;
