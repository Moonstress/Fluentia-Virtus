import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import "./CartItem.css"

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


export default CartItem;
