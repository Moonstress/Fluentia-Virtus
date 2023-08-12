import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css'

const ItemDetail = ({ id, stock, img, nombre, descripcion, precio }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log('Productos Agregads: ' + cantidad)
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  const { agregarProducto } = useContext(CarritoContext);

  return (
    <div className='contenedorItem'>
      <div className='table'>
        <img src={img} alt={nombre} className="imgDetail" />
      </div>
      <div className='table'>
        <h2>Nombre: {nombre} </h2>
        <div dangerouslySetInnerHTML={{ __html: descripcion }} />
        <h2>Precio: {precio} </h2>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> <button className="btn btn-primary finalizarCompra">Terminar Compra </button ></Link>) : (<ItemCount stock={stock} initial={1} onAdd={manejadorCantidad} />)
        }
      </div>
    </div>
  );
}

export default ItemDetail;
