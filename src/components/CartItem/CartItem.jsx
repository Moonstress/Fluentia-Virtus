import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {item.precio}</p>
      {/* Pass the item.id as an argument to eliminarProducto */}
      <button onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
    </div>
  );
};

export default CartItem;
